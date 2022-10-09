import { forwardRef } from 'react'
import styles from '../styles/Container.module.scss'

interface ContainerProps {
  children: React.ReactNode,
  zIndex?: number,
  [key: string]: any
}

const Container = forwardRef(({ zIndex, children, ...props }: ContainerProps, ref: any) => {
  return (
    <div ref={ref} className={styles.wrapper} style={{ zIndex: zIndex || 'auto' }} {...props}>{children}</div>
  )
})

Container.displayName = 'Container'

// const Container = ({ zIndex, children }: ContainerProps): JSX.Element => {
//   return (
//     <div className={styles.wrapper} style={{ zIndex: zIndex || 'auto' }}>{children}</div>
//   )
// }

export default Container