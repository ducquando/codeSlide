/*
 * mydraft.cc
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved.
*/

import { DefaultAppearance, RenderContext, ShapePlugin } from '@app/wireframes/interface';
import { CommonTheme } from './_theme';

const DEFAULT_APPEARANCE = {
    [DefaultAppearance.FONT_SIZE]: CommonTheme.CONTROL_FONT_SIZE,
    [DefaultAppearance.FOREGROUND_COLOR]: CommonTheme.CONTROL_TEXT_COLOR,
    [DefaultAppearance.TEXT_ALIGNMENT]: 'left',
    [DefaultAppearance.TEXT]: 'Textbox',
};

export class Textbox implements ShapePlugin {
    public identifier(): string {
        return 'Textbox';
    }

    public defaultAppearance() {
        return DEFAULT_APPEARANCE;
    }

    public defaultSize() {
        return { x: 200, y: 140 };
    }

    public previewSize(desiredWidth: number, desiredHeight: number) {
        return { x: desiredWidth * 2, y: desiredHeight * 2 };
    }

    public render(ctx: RenderContext) {
        ctx.renderer2.textMultiline(ctx.shape, ctx.rect, undefined, true);
    }
}
