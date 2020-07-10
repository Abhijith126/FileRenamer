import { TestBed } from '@angular/core/testing';

import { FilerenamerService } from './filerenamer.service';

describe('FilerenamerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FilerenamerService = TestBed.get(FilerenamerService);
        expect(service).toBeTruthy();
    });
});
