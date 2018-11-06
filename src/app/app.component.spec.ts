import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('Rock Paper Scissors', () => {
    beforeEach(async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const component = fixture.componentInstance;

        fixture.detectChanges();
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const app = this.fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title in a h1 tag', () => {
        this.fixture.detectChanges();
        const compiled = this.fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Rock, paper, scissors - let\'s play!');
    });

    it('reset button should hide the results', () => {
        this.component.resetScores();
        const results = this.fixture.debugElement.query(By.css('.results'));
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
