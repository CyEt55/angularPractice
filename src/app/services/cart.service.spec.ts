import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
    });
  });

  it('should be created', () => {
    service = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
