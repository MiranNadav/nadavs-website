import React from 'react';
import styled from 'styled-components';
import BasicText from "./BasicText";

interface IDownload {
  href: string,
  download: string,
  text: string
}

const Download = ({ href, download, text }: IDownload) => (
  <DownloadLink href={href} download={download}>
    <BasicText text={text} fontStyle={'italic'} />
  </DownloadLink>
);

const DownloadLink = styled.a`
  text-decoration: none;
`;

export default Download;