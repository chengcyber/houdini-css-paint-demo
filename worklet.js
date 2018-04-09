function drawCross(ctx, size) {
  ctx.lineWidth = ctx.lineWidth || 2;
  ctx.strokeStyle = ctx.strokeStyle || '#666';

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size.width, size.height);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(size.width, 0);
  ctx.lineTo(0, size.height);
  ctx.stroke();
}

class PlaceholderBoxPainter {
  paint(ctx, size) {
    drawCross(ctx, size);
  }
}

registerPaint('placeholder-box', PlaceholderBoxPainter);


class PlaceholderBoxPropsPainter {
    static get inputProperties() {
        return ['border-top-width', 'border-top-color'];
    }

    paint(ctx, size, props) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#666';

        let borderTopWidthProp = props.get('border-top-width');
        if (borderTopWidthProp) {
            ctx.lineWidth = borderTopWidthProp.value;
        }

        let borderTopColorProp = props.get('border-top-color');
        if (borderTopColorProp) {
            ctx.strokeStyle = borderTopColorProp.toString();
        }

        drawCross(ctx, size);
    }
}

registerPaint('placeholder-box-props', PlaceholderBoxPropsPainter);




class JaggedEdgePainter {

  static get inputProperties() {

    return ['--tooth-width', '--tooth-height'];
  }

  paint(ctx, size, props) {
    let toothWidth = props.get('--tooth-width').value;
    let toothHeight = props.get('--tooth-height').value;

    // 为确保「牙齿」排列集中，需要进行一系列计算
    let spaceBeforeCenterTooth = (size.width - toothWidth) / 2;
    let teethBeforeCenterTooth = Math.ceil(spaceBeforeCenterTooth / toothWidth);
    let totalTeeth = teethBeforeCenterTooth * 2 + 1;
    let startX = spaceBeforeCenterTooth - teethBeforeCenterTooth * toothWidth;

    // 从左开始画
    ctx.beginPath();
    ctx.moveTo(startX, toothHeight);

    // 给所有「牙齿」画上锯齿
    for (let i = 0; i < totalTeeth; i++) {
      let x = startX + toothWidth * i;
      ctx.lineTo(x + toothWidth / 2, 0);
      ctx.lineTo(x + toothWidth, toothHeight);
    }

    // 闭合「牙齿」的曲线，并填色
    ctx.lineTo(size.width, size.height);
    ctx.lineTo(0, size.height);
    ctx.closePath();
    ctx.fill();
  }
}

registerPaint('jagged-edge', JaggedEdgePainter);


class PolkaDotFadePainter {
    static get inputProperties() {
        return ['--dot-spacing', '--dot-fade-offset', '--dot-color'];
    }

    paint(ctx, size, props) {
        let spacing = props.get('--dot-spacing').value;
        let fadeOffset = props.get('--dot-fade-offset').value;
        let color = props.get('--dot-color').toString();

        ctx.fillStyle = color;
        for (let y = 0; y < size.height + spacing; y += spacing) {
            for (let x = 0; x < size.width + spacing; x += spacing * 2) {
                // 通过变换 x 在每一行中创建交错的点
                let staggerX = x + ((y / spacing) % 2 === 1 ? spacing : 0);

                // 通过 fade offset和每个点的横坐标，计算出该点的半径
                let fadeRelativeX = staggerX - size.width * fadeOffset / 100;
                let radius = spacing * Math.max(Math.min(1 - fadeRelativeX / size.width, 1), 0);

                // 画出目标点
                ctx.beginPath();
                ctx.arc(staggerX, y, radius, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }
}

registerPaint('polka-dot-fade', PolkaDotFadePainter);
