'use client';

import React from 'react';
import Link from 'next/link';
import cx from '@/utils/cx';
import styles from './Button.module.scss';

type ButtonProps = {
    secondary?: boolean;
    small?: boolean;
    fullWidth?: boolean;
    href?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
};

const Button = ({
    secondary,
    small,
    fullWidth,
    onClick,
    href,
    className,
    type = 'button',
    disabled = false,
    children
}: ButtonProps) => {
    const kindModifier = secondary ? 'Button--secondary' : 'Button--primary';
    const sizeModifier = small ? 'Button--small' : '';
    const widthModifier = fullWidth ? 'Button--fullWidth' : '';

    const classes = [styles.Button, styles[kindModifier], styles[sizeModifier], styles[widthModifier]];

    if (className) classes.push(className);

    const Tag = href ? Link : 'button';


    return (
        <Tag
            disabled={disabled}
            type={type}
            className={cx(...classes)}
            onClick={onClick}
            href={href || ''}
        >
            {children}
        </Tag>
    );
};

export default Button;
