import { TestBed, inject } from '@angular/core/testing';

import { WidgetRegistryService } from './widget-registry.service';

describe('WidgetRegistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetRegistryService]
    });
  });

  it('should be created', inject([WidgetRegistryService], (service: WidgetRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
