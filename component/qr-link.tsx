import React from 'react';
import QRCode from "qrcode.react";

export type QrLinkProps = {
  /**
   * a text to be rendered in the component.
   */
  url: string
};


export function QrLink({ url }: QrLinkProps) {
  return (
    <div data-testid="qr-link">
      <a href={url}>
        <QRCode value={url} />
      </a>
    </div>
  );
}
