export interface IBreakPoints {
  xs: number;
  sm: number;
  md: number;
}
export class Responsive {
  // From https://stackoverflow.com/questions/19592968/bootstrap-3-breakpoints-and-media-queries
  static breakpoints: IBreakPoints = {
    xs: 576,
    sm: 768,
    md: 992,
  }

  /**
   * Use your custom breakpoints
   * @param breakpoints 
   */
  static setBreakpoints(breakpoints: IBreakPoints) {
    Responsive.breakpoints = breakpoints;
  }

  /**
   * Is device an extra small screen?
   * @param width 
   */
  static isXs(width?: number): boolean {
    const w = width || window.innerWidth;
    return w <= Responsive.breakpoints.xs;
  }
  
  /**
   * Is device a small screen?
   * @param width 
   */
  static isSm(width?: number): boolean {
    const w = width || window.innerWidth
    return !Responsive.isXs(w) && w <= Responsive.breakpoints.sm;
  }

  /**
   * Is device a medium screen?
   * @param width 
   */
  static isMd(width?: number): boolean {
    const w = width || window.innerWidth
    return !Responsive.isXs(w) && !Responsive.isSm(w) && w <= Responsive.breakpoints.md;
  }

  /**
   * Is device a large screen?
   * @param width
   */
  static isLg(width?: number): boolean {
    const w = width || window.innerWidth
    return w > Responsive.breakpoints.md;
  }

  /**
   * Is device an extra small or a small screen?
   * @param width 
   */
  static isMobile(width?: number): boolean {
    return Responsive.isXs(width) || Responsive.isSm(width);
  }

  /**
   * Is device a medium or large screen?
   * @param width 
   */
  static isDesktop(width?: number): boolean {
    return Responsive.isMd(width) || Responsive.isLg(width);
  }
}
