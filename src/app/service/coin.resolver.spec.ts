import { TestBed } from '@angular/core/testing';

import { CoinResolver } from './coin.resolver';

describe('CoinResolver', () => {
  let resolver: CoinResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CoinResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
