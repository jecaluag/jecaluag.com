export type Position = Partial<Record<'x' | 'y' | 'rotate' | 'width' | 'height' | 'centerX' | 'centerY', number>>

export default function getRelativeCoordinates(event: any, referenceElement: any): Position {
  const position = {
    x: event.pageX,
    y: event.pageY - window.pageYOffset
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  const x = position.x - offset.left
  const y = position.y - offset.top

  return {
    x,
    y,
    rotate: (x + y) / 5,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
  };
}