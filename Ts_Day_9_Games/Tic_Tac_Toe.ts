// Tic Tac Toe in TypeScript (console-based)

type Player = "X" | "O";
type Cell = " " | Player;

class TicTacToe {
  private board: Cell[] = Array(9).fill(" ");
  private currentPlayer: Player = "X";

  // Print the board
  printBoard(): void {
    console.log(`
     ${this.board[0]} | ${this.board[1]} | ${this.board[2]}
    ---+---+---
     ${this.board[3]} | ${this.board[4]} | ${this.board[5]}
    ---+---+---
     ${this.board[6]} | ${this.board[7]} | ${this.board[8]}
    `);
  }

  // Check winner
  private checkWinner(): Player | "Draw" | null {
    const winPatterns: number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        this.board[a] !== " " &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a] as Player;
      }
    }

    return this.board.includes(" ") ? null : "Draw";
  }

  // Make a move
  makeMove(position: number): boolean {
    if (this.board[position] === " ") {
      this.board[position] = this.currentPlayer;
      let winner = this.checkWinner();
      this.printBoard();
      if (winner) {
        console.log(winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`);
        return true; // Game ends
      }
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    } else {
      console.log("Invalid move! Try again.");
    }
    return false;
  }
}

// Example Usage
const game = new TicTacToe();
game.printBoard();

game.makeMove(0); // X
game.makeMove(4); // O
game.makeMove(1); // X
game.makeMove(8); // O
game.makeMove(2); // X wins
