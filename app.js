

//component
const Header = (props) => {
    return(
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return(
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>X</button>
                {props.name}
            </span>
        <Counter score={ props.score } />
        </div>
    );
}

class Counter extends React.Component {
    state = {
        score:0
    };

    incrementScore = () => {
        this.setState( prevState => ({
            score: this.state.score + 1
        }));
    }
    decrementScore = () => {
        this.setState( prevState => ({
            score: this.state.score - 1
        }));
    }

    render(){
        return (
            <div className="counter">
              <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
              <span className="counter-score">{ this.state.score }</span>
              <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
          );
    }
}

class App extends React.Component {

    state = {
        players: [
            {
                name: "Guil",
                id: 1
              },
              {
                name: "Treasure",
                id: 2
              },
              {
                name: "Ashley",
                id: 3
              },
              {
                name: "James",
                id: 4
              }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
            players: prevState.players.filter( p => p.id !== id)
            };
        });
    }

    render() {
        return(
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers= {this.state.players.length} />
    
                {/* Players List */}
                {this.state.players.map( player =>
                <Player 
                name={ player.name } 
                removePlayer={this.handleRemovePlayer}
                key={ player.id.toString()}
                id={player.id}
                />
                )}
             
            </div>
    
        );
    }
 
}

//render information to the dom using this
ReactDOM.render(
    //1st choose what you want to attach to the DOM and then
    <App />,
    //select what element you want to attach to.
    document.getElementById('root')
);