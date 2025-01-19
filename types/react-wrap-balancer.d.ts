/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react-wrap-balancer' {
    import { ReactNode } from 'react'

    export interface BalancerProps {
      children: ReactNode
      className?: string
      ratio?: number
      as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    }

    export default function Balancer(props: BalancerProps): JSX.Element
  }
