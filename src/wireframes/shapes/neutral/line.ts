/*
 * codeslide.net
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
*/

import SVGPathCommander from 'svg-path-commander';
import { ConfigurableFactory, DefaultAppearance, RenderContext, ShapePlugin } from '@app/wireframes/interface';
import { CommonTheme } from './_theme';

type NodeType = 'None' | 'Arrow' | 'Triangle';
type EgdeType = 'Linear' | 'Quadratic' | 'Cubic';
type Direction = 'Up' | 'Down';
type Position = 'left' | 'right' | 'top' | 'bottom';

const LINE_START = 'LINE_START';
const LINE_END = 'LINE_END';
const LINE_TYPE = 'LINE_TYPE';
const LINE_DIRECTION = 'LINE_DIRECTION';

const LINE_STYLE: { [index: string]: NodeType | EgdeType | Direction } = {
    None: 'None',
    Arrow: 'Arrow',
    Triangle: 'Triangle',
    Linear: 'Linear',
    Quadratic: 'Quadratic',
    Cubic: 'Cubic',
    Up: 'Up',
    Down: 'Down',
};

const DEFAULT_APPEARANCE = {
    [DefaultAppearance.BACKGROUND_COLOR]: 0xEEEEEE,
    [DefaultAppearance.FONT_SIZE]: CommonTheme.CONTROL_FONT_SIZE,
    [DefaultAppearance.FOREGROUND_COLOR]: 0,
    [DefaultAppearance.STROKE_COLOR]: CommonTheme.CONTROL_BORDER_COLOR,
    [DefaultAppearance.STROKE_THICKNESS]: 2,
    [DefaultAppearance.TEXT_ALIGNMENT]: 'center',
    [DefaultAppearance.TEXT]: '',
    [LINE_START]: LINE_STYLE.None,
    [LINE_END]: LINE_STYLE.Arrow,
    [LINE_TYPE]: LINE_STYLE.Linear,
    [LINE_DIRECTION]: LINE_STYLE.Down,
};

export class Line implements ShapePlugin {
    public identifier(): string {
        return 'Line';
    }

    public defaultAppearance() {
        return DEFAULT_APPEARANCE;
    }

    public defaultSize() {
        return { x: 200, y: 100 };
    }

    public configurables(factory: ConfigurableFactory) {
        return [
            factory.selection(LINE_START, 'Start', [
                LINE_STYLE.None,
                LINE_STYLE.Arrow,
                LINE_STYLE.Triangle,
            ]),
            factory.selection(LINE_END, 'End', [
                LINE_STYLE.None,
                LINE_STYLE.Arrow,
                LINE_STYLE.Triangle,
            ]),
            factory.selection(LINE_TYPE, 'Type', [
                LINE_STYLE.Linear,
                LINE_STYLE.Quadratic,
            ]),
            factory.selection(LINE_DIRECTION, 'Direction', [
                LINE_STYLE.Up,
                LINE_STYLE.Down,
            ]),
        ];
    }

    public render(ctx: RenderContext) {
        this.createShape(ctx);
        this.createText(ctx);
    }

    private createText(ctx: RenderContext) {
        ctx.renderer2.text(ctx.shape, ctx.rect.deflate(10, 10), p => {
            p.setForegroundColor(ctx.shape);
            p.setBackgroundColor(ctx.shape);
        });
    }

    private createShape(ctx: RenderContext) {
        const b = ctx.rect;

        const shapeRad = Math.atan2(b.height, b.width);
        const height = ctx.shape.strokeThickness * 6;
        const width = ctx.shape.strokeThickness * 4.5;

        const lineType = ctx.shape.getAppearance(LINE_TYPE);

        if (lineType == LINE_STYLE.Quadratic) {
            // Quadratic line
            const ctlDir = ctx.shape.getAppearance('LINE_DIRECTION') == LINE_STYLE.Down ? 1 : -1;
            const ctlRad = shapeRad + ctlDir * Math.PI / 4;

            const pos: Record<Position, number> = {
                left: b.left + height * Math.cos(ctlRad),
                right: b.right - height * Math.cos(ctlRad - ctlDir * Math.PI / 2),
                top: b.top + height * Math.sin(ctlRad),
                bottom: b.bottom - height * Math.sin(ctlRad - ctlDir * Math.PI / 2),
            };

            // Control point, assuming isosceles triangle
            const ctlLen = Math.sqrt(((pos.right - pos.left) ** 2 + (pos.bottom - pos.top) ** 2) / 2);
            const ctlX = pos.left + ctlLen * Math.cos(ctlRad);
            const ctlY = pos.top + ctlLen * Math.sin(ctlRad);

            const path = `M${pos.left} ${pos.top} Q${ctlX} ${ctlY} ${pos.right} ${pos.bottom} Q${ctlX} ${ctlY} ${pos.left} ${pos.top} z`;
            this.createEdge(ctx, path);
            this.createNode(ctx, pos, ctlRad - ctlDir * Math.PI, ctlRad - ctlDir * Math.PI / 2, height, width);

        } else if (lineType == LINE_STYLE.Linear) {
            // Linear line
            const pos: Record<Position, number> = {
                left: b.left + height * Math.cos(shapeRad),
                right: b.right - height * Math.cos(shapeRad),
                top: b.top + height * Math.sin(shapeRad),
                bottom: b.bottom - height * Math.sin(shapeRad),
            };

            const path = `M${pos.left} ${pos.top} L${pos.right} ${pos.bottom} z`;
            this.createEdge(ctx, path);
            this.createNode(ctx, pos, shapeRad - Math.PI, shapeRad, height, width);
        }
    }

    private createEdge(ctx: RenderContext, path: string) {
        ctx.renderer2.path(ctx.shape, path, p => {
            p.setStrokeColor(ctx.shape);
        });
    }

    private createNode(ctx: RenderContext, pos: Record<Position, number>, xRad: number, yRad: number, height: number, width: number) {
        const startType = ctx.shape.getAppearance('LINE_START');
        const endType = ctx.shape.getAppearance('LINE_END');

        const rotatingDegree = (radian: number) => {
            return 90 + Math.round(radian * 180 / Math.PI);
        };

        const shapeEdge = (x: number, y: number, rotating: number, type: NodeType) => {
            const SHAPES: Record<NodeType, string> = {
                'Triangle': `M${x} ${y} l-${width / 2} 0 l${width / 2}-${height} l${width / 2} ${height} z`,
                'Arrow': `M${x} ${y} c-${width / 4} 0-${width / 2} ${height / 4}-${width / 2} ${height / 4} l${width / 2}-${height} l${width / 2} ${height} c0 0-${width / 4}-${height / 4}-${width / 2}-${height / 4} z`,
                'None': `M${x} ${y} l0-${height} z`,
            };

            const transformedPath = new SVGPathCommander(SHAPES[type])
                .transform({ rotate: rotatingDegree(rotating),  origin: [x, y] })
                .toString();
    
            ctx.renderer2.path(ctx.shape, transformedPath, p => {
                p.setBackgroundColor(ctx.shape.strokeColor);
                p.setStrokeColor(ctx.shape.strokeColor);
            });
        };

        shapeEdge(pos.left, pos.top, xRad, startType);
        shapeEdge(pos.right, pos.bottom, yRad, endType);
    }
}
