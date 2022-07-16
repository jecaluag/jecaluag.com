import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


const MagicCursor = (): JSX.Element => (
  <AnimatedCursor
    innerSize={8}
    outerSize={8}
    color='83, 64, 71' // rgb(193, 11, 111)
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={10}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.cursor-pointer'
    ]}
  />
)

export default MagicCursor