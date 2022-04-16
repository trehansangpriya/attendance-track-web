import React from 'react'
import Link from 'next/link'

const Button = ({ type = 'button', title, className, onClick, disabled = false, href, as = href, icon }) => {
    if (type === 'link') {
        return (
            <button
                className={[
                    'font-medium py-[12px] px-[18px] rounded transition-all',
                    !disabled ? 'bg-primary-500 text-layout-100 ' : 'bg-primary-300 text-layout-100 cursor-not-allowed',
                    !disabled && 'hover:bg-primary-700 hover:scale-[1.005]',
                    !disabled && 'active:bg-primary-600 active:scale-100',
                    className
                ].join(' ')}>
                <Link
                    href={href}
                    as={as}
                    passHref

                >
                    <a
                        className='flex justify-center items-center gap-2'
                        target={href === '/' ? '_self' : '_blank'}
                        rel='noopener noreferrer'
                    >
                        {icon && <span>{icon}</span>}

                        {title}
                    </a>
                </Link>
            </button>
        )
    }
    return (
        <button
            type={type}
            className={[
                ' flex items-center justify-center gap-2 font-medium py-[12px] px-[18px] rounded transition-all',
                !disabled ? 'bg-primary-500 text-layout-100 ' : 'bg-primary-300 text-layout-100 cursor-not-allowed',
                !disabled && 'hover:bg-primary-700 hover:scale-[1.005]',
                !disabled && 'active:bg-primary-600 active:scale-100',
                className
            ].join(' ')}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span>{icon}</span>}
            {title}
        </button>
    )
}

export default Button