import React from 'react';
import { render } from '@testing-library/react';
import { VideoPlayer } from '../../../../components/Detail/VideoPlayer';

describe('VideoPlayer Component tests suit', () => {
  it('Should match snapshot', () => {
    const element = render(<VideoPlayer videoId="abcdef" />);
    expect(element).toMatchSnapshot();
  });

  it('should render youtube link', () => {
    const element = render(<VideoPlayer videoId="abcdef" />);

    const el = element.container.getElementsByTagName('iframe')[0];
    expect(el.src).toEqual(`https://www.youtube-nocookie.com/embed/abcdef`);
  });
});
