import { cn } from '@/lib/utils'

type ContainerProps = React.ComponentProps<'div'> & {
  children: React.ReactNode
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'container mx-auto flex min-h-[calc(100vh-4rem)] flex-col',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
