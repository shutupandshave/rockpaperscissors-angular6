import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('Rock Paper Scissors', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Rock, paper, scissors - let\'s play!');
    });

    it('reset button should hide the results', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const results = fixture.debugElement.query(By.css('.results'));
        expect(results.nativeElement.attributes('hidden')).toEqual(true);
    });

    it('reset button should reset the score to 0, 0', () => {

    });

    it('chooseItem should show the results', () => {

    });

    it('chooseItem should generate a computer item', () => {

    });

    it('results output should show the correct message', () => {

    });
});
