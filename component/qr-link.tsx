import React from 'react';

export type QrLinkProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function QrLink({ text }: QrLinkProps) {
  return (
    <div>
      {text}
    </div>
  );
}
