import React from 'react';
import {ReactNode} from 'react';

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals';
import {render, screen, waitFor} from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';
import {Provider} from 'react-redux';

import {store} from '~redux/store';
import {ListScreen} from '~screens/ListScreen/ListScreen';

jest.useFakeTimers();
function Wrapper(props: {children: ReactNode}) {
  return <Provider store={store}>{props.children}</Provider>;
}

const data = [
  {
    createdAt: '2021-10-22T12:13:22.338Z',
    name: 'Pauline Blanda',
    avatar: 'https://cdn.fakercloud.com/avatars/mkginfo_128.jpg',
    id: '1',
  },
  {
    createdAt: '2021-10-22T11:08:31.908Z',
    name: 'Marguerite Turner',
    avatar: 'https://cdn.fakercloud.com/avatars/alxndrustinov_128.jpg',
    id: '2',
  },
  {
    createdAt: '2021-10-22T08:21:48.912Z',
    name: 'Eileen Blick',
    avatar: 'https://cdn.fakercloud.com/avatars/linux29_128.jpg',
    id: '3',
  },
  {
    createdAt: '2021-10-22T04:35:55.163Z',
    name: 'Nellie White PhD',
    avatar: 'https://cdn.fakercloud.com/avatars/netonet_il_128.jpg',
    id: '4',
  },
  {
    createdAt: '2021-10-21T21:07:47.876Z',
    name: 'Bill Russel',
    avatar: 'https://cdn.fakercloud.com/avatars/vladyn_128.jpg',
    id: '5',
  },
  {
    createdAt: '2021-10-21T17:42:57.935Z',
    name: 'Kara Simonis',
    avatar: 'https://cdn.fakercloud.com/avatars/lisovsky_128.jpg',
    id: '6',
  },
  {
    createdAt: '2021-10-22T05:07:04.214Z',
    name: 'Irvin Osinski DVM',
    avatar: 'https://cdn.fakercloud.com/avatars/colgruv_128.jpg',
    id: '7',
  },
  {
    createdAt: '2021-10-21T18:26:36.252Z',
    name: 'Ricky Wyman',
    avatar: 'https://cdn.fakercloud.com/avatars/davidcazalis_128.jpg',
    id: '8',
  },
  {
    createdAt: '2021-10-21T16:04:07.211Z',
    name: 'Phil Cruickshank',
    avatar: 'https://cdn.fakercloud.com/avatars/quailandquasar_128.jpg',
    id: '9',
  },
  {
    createdAt: '2021-10-21T22:26:02.961Z',
    name: 'Arthur Emmerich',
    avatar: 'https://cdn.fakercloud.com/avatars/alevizio_128.jpg',
    id: '10',
  },
  {
    createdAt: '2021-10-22T06:27:17.743Z',
    name: 'Mamie Konopelski',
    avatar: 'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
    id: '11',
  },
  {
    createdAt: '2021-10-22T01:25:48.547Z',
    name: 'Sophie Littel',
    avatar: 'https://cdn.fakercloud.com/avatars/uxward_128.jpg',
    id: '12',
  },
  {
    createdAt: '2021-10-22T07:55:21.809Z',
    name: 'Dixie Jacobs',
    avatar: 'https://cdn.fakercloud.com/avatars/ernestsemerda_128.jpg',
    id: '13',
  },
  {
    createdAt: '2021-10-22T09:31:35.770Z',
    name: "Mr. Rafael O'Conner",
    avatar: 'https://cdn.fakercloud.com/avatars/lanceguyatt_128.jpg',
    id: '14',
  },
  {
    createdAt: '2021-10-21T18:00:42.731Z',
    name: 'Deanna Zemlak',
    avatar: 'https://cdn.fakercloud.com/avatars/dzantievm_128.jpg',
    id: '15',
  },
  {
    createdAt: '2021-10-21T22:03:07.040Z',
    name: 'Dr. Randy Dickens',
    avatar: 'https://cdn.fakercloud.com/avatars/ryankirkman_128.jpg',
    id: '16',
  },
  {
    createdAt: '2021-10-21T19:47:06.816Z',
    name: 'Sheri Beer',
    avatar: 'https://cdn.fakercloud.com/avatars/rahmeen_128.jpg',
    id: '17',
  },
  {
    createdAt: '2021-10-22T01:37:25.482Z',
    name: 'Katrina Kihn V',
    avatar: 'https://cdn.fakercloud.com/avatars/chrisstumph_128.jpg',
    id: '18',
  },
  {
    createdAt: '2021-10-21T21:22:36.083Z',
    name: 'Eugene Abbott',
    avatar: 'https://cdn.fakercloud.com/avatars/oskarlevinson_128.jpg',
    id: '19',
  },
  {
    createdAt: '2021-10-22T11:57:01.987Z',
    name: 'Miss Victoria Kuhlman',
    avatar: 'https://cdn.fakercloud.com/avatars/danvierich_128.jpg',
    id: '20',
  },
  {
    createdAt: '2021-10-22T11:51:54.372Z',
    name: 'Misty Bailey II',
    avatar: 'https://cdn.fakercloud.com/avatars/saulihirvi_128.jpg',
    id: '21',
  },
  {
    createdAt: '2021-10-21T18:19:47.145Z',
    name: 'Meredith Ward',
    avatar: 'https://cdn.fakercloud.com/avatars/kirangopal_128.jpg',
    id: '22',
  },
  {
    createdAt: '2021-10-22T04:04:06.472Z',
    name: 'Jan Macejkovic',
    avatar: 'https://cdn.fakercloud.com/avatars/emmeffess_128.jpg',
    id: '23',
  },
  {
    createdAt: '2021-10-22T14:00:34.803Z',
    name: 'Miss Darrel Simonis',
    avatar: 'https://cdn.fakercloud.com/avatars/rweve_128.jpg',
    id: '24',
  },
  {
    createdAt: '2021-10-22T05:43:15.705Z',
    name: 'Ebony Kunze DDS',
    avatar: 'https://cdn.fakercloud.com/avatars/yalozhkin_128.jpg',
    id: '25',
  },
  {
    createdAt: '2021-10-22T00:48:55.479Z',
    name: 'Diana Watsica',
    avatar: 'https://cdn.fakercloud.com/avatars/rickyyean_128.jpg',
    id: '26',
  },
  {
    createdAt: '2021-10-21T16:00:14.205Z',
    name: 'Bradley Mayert',
    avatar: 'https://cdn.fakercloud.com/avatars/dgajjar_128.jpg',
    id: '27',
  },
  {
    createdAt: '2021-10-22T12:25:12.449Z',
    name: 'Darla Goldner',
    avatar: 'https://cdn.fakercloud.com/avatars/miguelmendes_128.jpg',
    id: '28',
  },
  {
    createdAt: '2021-10-22T11:19:00.058Z',
    name: 'Kellie Bode',
    avatar: 'https://cdn.fakercloud.com/avatars/jesseddy_128.jpg',
    id: '29',
  },
  {
    createdAt: '2021-10-22T10:38:31.565Z',
    name: 'Betty Hackett',
    avatar: 'https://cdn.fakercloud.com/avatars/mgonto_128.jpg',
    id: '30',
  },
  {
    createdAt: '2021-10-22T02:42:11.577Z',
    name: 'Dr. Jennie Glover',
    avatar: 'https://cdn.fakercloud.com/avatars/illyzoren_128.jpg',
    id: '31',
  },
  {
    createdAt: '2021-10-22T08:35:41.338Z',
    name: 'Randolph Rippin',
    avatar: 'https://cdn.fakercloud.com/avatars/scottkclark_128.jpg',
    id: '32',
  },
  {
    createdAt: '2021-10-21T18:41:14.191Z',
    name: 'Willie Hodkiewicz',
    avatar: 'https://cdn.fakercloud.com/avatars/brenton_clarke_128.jpg',
    id: '33',
  },
  {
    createdAt: '2021-10-22T06:21:08.254Z',
    name: 'Ralph Klocko',
    avatar: 'https://cdn.fakercloud.com/avatars/jmillspaysbills_128.jpg',
    id: '34',
  },
  {
    createdAt: '2021-10-22T14:04:39.529Z',
    name: 'Terrell Graham',
    avatar: 'https://cdn.fakercloud.com/avatars/yecidsm_128.jpg',
    id: '35',
  },
  {
    createdAt: '2021-10-21T19:03:11.927Z',
    name: 'Darrin Erdman',
    avatar: 'https://cdn.fakercloud.com/avatars/vm_f_128.jpg',
    id: '36',
  },
  {
    createdAt: '2021-10-22T14:12:13.284Z',
    name: 'Raul Paucek',
    avatar: 'https://cdn.fakercloud.com/avatars/n1ght_coder_128.jpg',
    id: '37',
  },
  {
    createdAt: '2021-10-21T19:38:33.782Z',
    name: 'Mitchell Balistreri',
    avatar: 'https://cdn.fakercloud.com/avatars/hugocornejo_128.jpg',
    id: '38',
  },
  {
    createdAt: '2021-10-22T10:29:08.888Z',
    name: 'Justin Casper',
    avatar: 'https://cdn.fakercloud.com/avatars/betraydan_128.jpg',
    id: '39',
  },
  {
    createdAt: '2021-10-22T07:50:31.243Z',
    name: 'Jeremy Gleichner',
    avatar: 'https://cdn.fakercloud.com/avatars/dallasbpeters_128.jpg',
    id: '40',
  },
  {
    createdAt: '2021-10-21T21:25:30.330Z',
    name: 'Frankie Zulauf',
    avatar: 'https://cdn.fakercloud.com/avatars/aluisio_azevedo_128.jpg',
    id: '41',
  },
  {
    createdAt: '2021-10-22T09:58:00.082Z',
    name: 'Andy Schaefer',
    avatar: 'https://cdn.fakercloud.com/avatars/teylorfeliz_128.jpg',
    id: '42',
  },
  {
    createdAt: '2021-10-21T16:19:00.651Z',
    name: 'Amy Emmerich',
    avatar: 'https://cdn.fakercloud.com/avatars/shanehudson_128.jpg',
    id: '43',
  },
  {
    createdAt: '2021-10-22T04:46:14.325Z',
    name: 'Salvador Kuhlman',
    avatar: 'https://cdn.fakercloud.com/avatars/larrygerard_128.jpg',
    id: '44',
  },
  {
    createdAt: '2021-10-22T05:01:39.680Z',
    name: 'Sandy Glover',
    avatar: 'https://cdn.fakercloud.com/avatars/ultragex_128.jpg',
    id: '45',
  },
  {
    createdAt: '2021-10-22T00:02:07.035Z',
    name: 'Miguel Keeling',
    avatar: 'https://cdn.fakercloud.com/avatars/panghal0_128.jpg',
    id: '46',
  },
  {
    createdAt: '2021-10-21T15:35:39.108Z',
    name: 'Chester Marquardt PhD',
    avatar: 'https://cdn.fakercloud.com/avatars/jjsiii_128.jpg',
    id: '47',
  },
  {
    createdAt: '2021-10-21T22:03:04.934Z',
    name: 'Dr. Noel McGlynn',
    avatar: 'https://cdn.fakercloud.com/avatars/vijaykarthik_128.jpg',
    id: '48',
  },
  {
    createdAt: '2021-10-22T14:41:33.898Z',
    name: 'Dominic Mayer',
    avatar: 'https://cdn.fakercloud.com/avatars/josep_martins_128.jpg',
    id: '49',
  },
  {
    createdAt: '2021-10-22T01:51:13.746Z',
    name: 'Pamela Collins',
    avatar: 'https://cdn.fakercloud.com/avatars/jeremery_128.jpg',
    id: '50',
  },
  {
    createdAt: '2024-01-11T14:29:49.710Z',
    name: 'Stuart Kub',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/67.jpg',
    id: '51',
    username: 'email@email.com',
    password: 'testing',
  },
  {
    createdAt: '2024-01-11T16:17:34.923Z',
    name: 'Ethel Wolff',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/114.jpg',
    id: '52',
    username: 'email@email.com',
    password: 'testing',
  },
  {
    createdAt: '2024-01-11T13:20:01.996Z',
    name: 'Rosemary Legros III',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/303.jpg',
    id: '53',
    username: 'email@email.com',
    password: 'testing',
  },
];

describe('ListScreen test', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
  });

  afterEach(() => {
    fetchMock.disableMocks();
  });

  test('should show loading indicator', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({data}));

    render(
      <Wrapper>
        <ListScreen />
      </Wrapper>,
    );

    const loadingIndicator = screen.getByTestId('loading_indicator');
    expect(loadingIndicator).toBeDefined();
  });

  test('should render empty list', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({data: []}));

    render(
      <Wrapper>
        <ListScreen />
      </Wrapper>,
    );

    await waitFor(() => {
      const emptyList = screen.getByTestId('empty_list');
      expect(emptyList).toBeDefined();
    });
  });
});
