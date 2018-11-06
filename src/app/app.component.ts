import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title = 'Rock, paper, scissors - let\'s play!';
    scoresArray = [0, 0]; // Score Store, [0] = player, [1] = computer
    playerSelected = -1;
    computerSelected  = -1;
    isResultShow = false;
    theResult = 0;

    chooseItem( item: number): void {
        this.playerSelected = item;
        this.computerSelected = Math.floor(Math.random() * 3 );  // generate a number from 0 -2
        this.checkResult();
        this.isResultShow = true;
    }

    checkResult(): void {
        const playerPick = this.playerSelected;
        const computerPick = this.computerSelected;
        if ( playerPick ===  computerPick ) {
            this.theResult = 2; // Draw
        } else if (( playerPick - computerPick + 3 ) % 3 === 1 ) {
            this.theResult = 0; // Player wins
            this.scoresArray[0] = this.scoresArray[0] + 1;
        } else {
            this.theResult = 1; // Computer wins
            this.scoresArray[1] = this.scoresArray[1] + 1;
        }
    }

    resetScores(): void {
        this.scoresArray = [0, 0];
        this.isResultShow = false;
    }
}
