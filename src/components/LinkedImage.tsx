import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

interface ILinkedImage {
    href: string,
    width?: string,
    height?: string,
    src: string
}

const LinkedImage = ({ href, width, height, src }: ILinkedImage) => {
    return <Link href={href} target="_blank">
        <Logo src={src} width={width} height={height} />
    </Link>
}

const Link = styled.a``;

export default LinkedImage;