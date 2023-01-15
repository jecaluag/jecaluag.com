import { forwardRef } from 'react'
import styles from '../styles/Container.module.scss'

interface ContainerProps {
  children: React.ReactNode,
  zIndex?: number,
  [key: string]: any
}

const Container = forwardRef(({ zIndex, children, className, ...props }: ContainerProps, ref: any) => {
  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${className}`}
      style={{ zIndex: zIndex || 'auto' }} 
      {...props}
    >
      {children}
    </div>
  )
})

Container.displayName = 'Container'

export default Container