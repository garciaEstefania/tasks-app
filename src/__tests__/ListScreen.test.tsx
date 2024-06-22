import React from 'react';
import {ReactNode} from 'react';

import {describe, expect, jest, test} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import {store} from '~redux/store';
import {ListScreen} from '~screens/ListScreen/ListScreen';

jest.useFakeTimers();
function Wrapper(props: {children: ReactNode}) {
  return <Provider store={store}>{props.children}</Provider>;
}

describe('ListScreen test', () => {
  test('should show loading indicator', () => {
    render(
      <Wrapper>
        <ListScreen />
      </Wrapper>,
    );
    const listScreen = screen.getByTestId('list_screen');
    const loadingIndicator = screen.getByTestId('loading_indicator');
    expect(listScreen).toBeDefined();
    expect(loadingIndicator).toBeDefined();
  });
});
