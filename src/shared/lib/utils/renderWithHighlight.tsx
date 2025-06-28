import { HIGHLIGHT_MARK } from '../../constants';
import { Highlight } from '../../ui';
import { Fragment } from 'react';

export const renderWithHighlight = (defaultText: string, highlightTexts: string[]) => {
  if (highlightTexts.length === 0) return defaultText;

  const defaultTextArray = defaultText.split(HIGHLIGHT_MARK);
  if (defaultTextArray.length - 1 !== highlightTexts.length) return defaultText;

  return (
    <>
      {defaultTextArray.map((text, index) => (
        //biome-ignore lint/suspicious/noArrayIndexKey: Using index as key for simplicity in this case
        <Fragment key={index}>
          {text}
          {index < highlightTexts.length && <Highlight>{highlightTexts[index]}</Highlight>}
        </Fragment>
      ))}
    </>
  );
};
