import { HIGHLIGHT_MARK } from '../../constants';
import { Highlight } from '../../ui';
import { Fragment } from 'react';

export const renderWithHighlight = (defaultText: string, highlightText: string) => {
  if (highlightText.length === 0) return defaultText;

  const defaultTextArray = defaultText.split(HIGHLIGHT_MARK);
  return (
    <>
      {defaultTextArray.map((text, index) => (
        <Fragment key={text}>
          {text}
          {index < defaultTextArray.length - 1 && <Highlight>{highlightText}</Highlight>}
        </Fragment>
      ))}
    </>
  );
};
