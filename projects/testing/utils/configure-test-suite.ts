import type {ComponentFixture} from '@angular/core/testing';
import {getTestBed, TestBed} from '@angular/core/testing';

/** deprecated, will be removed in 4.0 */
export const configureTestSuite = (configureModule?: () => void): void => {
    const testBedApi = getTestBed();
    const originReset = TestBed.resetTestingModule;

    beforeAll(() => {
        TestBed.resetTestingModule();
        TestBed.resetTestingModule = () => TestBed;
    });

    // Custom hook
    if (configureModule) {
        beforeAll(async () => {
            configureModule();
            await TestBed.compileComponents();
        });
    }

    afterEach(() => {
        // @ts-ignore
        testBedApi._activeFixtures.forEach((fixture: ComponentFixture<unknown>) =>
            fixture.destroy(),
        );
        // reset ViewEngine TestBed
        // @ts-ignore
        testBedApi._instantiated = false;
        // reset Ivy TestBed
        // @ts-ignore
        testBedApi._testModuleRef = null;
    });

    afterAll(() => {
        TestBed.resetTestingModule = originReset;
        TestBed.resetTestingModule();
    });
};
