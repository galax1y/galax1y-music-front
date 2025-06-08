import { cn } from '@/lib/utils'

type BlockquoteProps = React.ComponentProps<'blockquote'>

export function Blockquote({ className, ref, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      ref={ref}
      {...props}
    />
  )
}

type ParagraphProps = React.ComponentProps<'p'>

export function P({ className, ref, ...props }: ParagraphProps) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      ref={ref}
      {...props}
    />
  )
}

type ULProps = React.ComponentProps<'ul'>

export function List({ className, ref, ...props }: ULProps) {
  return (
    <ul
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      ref={ref}
      {...props}
    />
  )
}

type CodeProps = React.ComponentProps<'code'>

export function InlineCode({ className, ref, ...props }: CodeProps) {
  return (
    <code
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}

type LargeProps = React.ComponentProps<'div'>

export function Large({ className, ref, ...props }: LargeProps) {
  return (
    <div
      className={cn('text-lg font-semibold', className)}
      ref={ref}
      {...props}
    />
  )
}

type SmallProps = React.ComponentProps<'small'>

export function Small({ className, ref, ...props }: SmallProps) {
  return (
    <small
      className={cn('text-sm leading-none font-medium', className)}
      ref={ref}
      {...props}
    />
  )
}

type MutedProps = React.ComponentProps<'p'>

export function Muted({ className, ref, ...props }: MutedProps) {
  return (
    <p
      className={cn('text-muted-foreground text-sm', className)}
      ref={ref}
      {...props}
    />
  )
}

type LeadProps = React.ComponentProps<'p'>
export function Lead({ className, ref, ...props }: LeadProps) {
  return (
    <p
      className={cn('text-muted-foreground text-xl', className)}
      ref={ref}
      {...props}
    />
  )
}

type H1Props = React.ComponentProps<'h1'>

export function H1({ className, ref, ...props }: H1Props) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}

type H2Props = React.ComponentProps<'h2'>

export function H2({ className, ref, ...props }: H2Props) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}

type H3Props = React.ComponentProps<'h3'>

export function H3({ className, ref, ...props }: H3Props) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}

type H4Props = React.ComponentProps<'h4'>

export function H4({ className, ref, ...props }: H4Props) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}
