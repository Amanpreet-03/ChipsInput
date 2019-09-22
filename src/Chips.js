import React, { Component } from 'react';
import styled from 'styled-components';

const Enteries = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    border-bottom: 3px solid #0099cc;
`

const Input = styled.input`
    border: none;
`
const ListItems = styled.div`
box-shadow: 1px 1px 3px 1px #bfbfbf;
width: 500px;
margin: 30px;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr auto;
    background: white;
    padding: 10px;
    &:hover {
        background: #e6e6e6;
    }
`

const ProfilePic = styled.img`
    border-radius: 50%;
    width: 30px;
`

const Name = styled.div`
    color: black;
    font-size: 20px;
`
const Email = styled.div`
    color: #a6a6a6;
    font-size: 20px;
`



class Chips extends Component {
    state = {
        show: false,
        text:"",
        value: [],
        users: [
            {
                name: "Nick Giannopoulos",
                email: "n.giannopoulus@example.com",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEXw8PCLlNT19fKEjtKJktSfptnd3uqkqtrZ2+mCjNLh4uv39vJ9iNHe4Ouaodj6+fPr7O/KzeWvtN2PmNWUnNbXA9SsAAAB50lEQVR4nO3cW26DAAxFwQQKLaTQ5/7X2g1Uwh82dZo5C7hihPhDvlwkSZIkSdJDt86R3k+eSmyYlvG415dzpzIbnp+ux40hYd5UZoSENVOZERLWTGVGSFgzlRkhYc1UZoSENVOZERLWTGVGSFgzlRkhYc1UZoSENVOZERLWTGVGSFgzldlDCAON82047C00tZwu/JwC7ftzoO/Q1Hay8HL8bobhti6R1zO9RcbOBsaax8AX9jQ1ffpIhIT9IyTsHyFh/wgJ+0dI2D9Cwv4REvaPkLB/hIT9IyTsHyFh+4YtJrz99YP+WuTUw/YREV730NmInlcjQsDrNbLU9GpEYk3/iSIkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/E/CyMWBuxbukYMQX3csHLfY5Y87Ft739RZCwoKpzAgJa6YyIySsmcqMkLBmKjNCwpqpzAgJa6YyIySsmcqMkLBmKjNCwpqpzAgJa6YyIySsmcrsFnyswMmLxKlg75EbDusUeqyP7dSpeQ0J59fIFYfgPyLnTi176EWHTq70LHgIhrBxhIT9IyTsHyFh/wgJ+0dI2D9Cwv4REvaPkLB/hIT9IyTsH+HjCJfIqYeexYRr6NRDzz5jv6QcH3roWwgoSZIkSdI/7AcDVnKZ4WlFUwAAAABJRU5ErkJggg=="
            },
            {
                name: "Narayana Garner",
                email: "n.garner@example.com",
                image: ""
            },
            {
                name: "Anita Gros",
                email: "a.gros@example.com",
                image: ""
            },
            {
                name: "Megan Smith",
                email: "m.smith@example.com",
                image: ""
            }
        ]
    }

    users= [
        {
            name: "Nick Giannopoulos",
            email: "n.giannopoulus@example.com",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEXw8PCLlNT19fKEjtKJktSfptnd3uqkqtrZ2+mCjNLh4uv39vJ9iNHe4Ouaodj6+fPr7O/KzeWvtN2PmNWUnNbXA9SsAAAB50lEQVR4nO3cW26DAAxFwQQKLaTQ5/7X2g1Uwh82dZo5C7hihPhDvlwkSZIkSdJDt86R3k+eSmyYlvG415dzpzIbnp+ux40hYd5UZoSENVOZERLWTGVGSFgzlRkhYc1UZoSENVOZERLWTGVGSFgzlRkhYc1UZoSENVOZERLWTGVGSFgzldlDCAON82047C00tZwu/JwC7ftzoO/Q1Hay8HL8bobhti6R1zO9RcbOBsaax8AX9jQ1ffpIhIT9IyTsHyFh/wgJ+0dI2D9Cwv4REvaPkLB/hIT9IyTsHyFh+4YtJrz99YP+WuTUw/YREV730NmInlcjQsDrNbLU9GpEYk3/iSIkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/E/CyMWBuxbukYMQX3csHLfY5Y87Ft739RZCwoKpzAgJa6YyIySsmcqMkLBmKjNCwpqpzAgJa6YyIySsmcqMkLBmKjNCwpqpzAgJa6YyIySsmcrsFnyswMmLxKlg75EbDusUeqyP7dSpeQ0J59fIFYfgPyLnTi176EWHTq70LHgIhrBxhIT9IyTsHyFh/wgJ+0dI2D9Cwv4REvaPkLB/hIT9IyTsH+HjCJfIqYeexYRr6NRDzz5jv6QcH3roWwgoSZIkSdI/7AcDVnKZ4WlFUwAAAABJRU5ErkJggg=="
        },
        {
            name: "Narayana Garner",
            email: "n.garner@example.com",
            image: ""
        },
        {
            name: "Anita Gros",
            email: "a.gros@example.com",
            image: ""
        },
        {
            name: "Megan Smith",
            email: "m.smith@example.com",
            image: ""
        }
    ]

    showList = (e) => {
        e.preventDefault();
        this.setState({ show: true })
    }

    handleChange =(e) => {
        console.log("e.target.value", e.target.value);
        console.log("username", this.state.users.map(user => user.name))
        console.log("check", this.state.users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase())));
        e.preventDefault();
        this.setState({            
            text:e.target.value,
            users: this.state.users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))

        })
        
    }

    listItemClicked = (e, name) => {
        e.preventDefault();
        this.setState((state) => ({
            value: [...this.state.value, name],
            users: state.users.filter(user => user.name !== name),
            text: ""

        })
        );

    }

    handleDelete = (username) => {
        this.setState((state) => ({
            value: this.state.value.filter(v => v !== username),
            users: state.users.concat(this.users.filter(user=> user.name===username))
        })
        );
        
    }


    render() {
        return (
            <div>
                <Enteries>
                    {this.state.value.map(username => (
                        <div key={username}>
                            {username}
                            <button
                                type="button"
                                onClick={() => this.handleDelete(username)}
                            >
                                &times;
                    </button>
                        </div>
                    ))}
                    <Input type="text" value={this.state.text} onClick={this.showList} onFocus={this.showList} onChange={this.handleChange}  />

                </Enteries>
                {this.state.show ?
                    <ListItems>
                        {this.state.users.map(user =>
                            (
                                <Row onClick={e => this.listItemClicked(e, user.name)} >
                                    <ProfilePic src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEXw8PCLlNT19fKEjtKJktSfptnd3uqkqtrZ2+mCjNLh4uv39vJ9iNHe4Ouaodj6+fPr7O/KzeWvtN2PmNWUnNbXA9SsAAAB50lEQVR4nO3cW26DAAxFwQQKLaTQ5/7X2g1Uwh82dZo5C7hihPhDvlwkSZIkSdJDt86R3k+eSmyYlvG415dzpzIbnp+ux40hYd5UZoSENVOZERLWTGVGSFgzlRkhYc1UZoSENVOZERLWTGVGSFgzlRkhYc1UZoSENVOZERLWTGVGSFgzldlDCAON82047C00tZwu/JwC7ftzoO/Q1Hay8HL8bobhti6R1zO9RcbOBsaax8AX9jQ1ffpIhIT9IyTsHyFh/wgJ+0dI2D9Cwv4REvaPkLB/hIT9IyTsHyFh+4YtJrz99YP+WuTUw/YREV730NmInlcjQsDrNbLU9GpEYk3/iSIkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/E/CyMWBuxbukYMQX3csHLfY5Y87Ft739RZCwoKpzAgJa6YyIySsmcqMkLBmKjNCwpqpzAgJa6YyIySsmcqMkLBmKjNCwpqpzAgJa6YyIySsmcrsFnyswMmLxKlg75EbDusUeqyP7dSpeQ0J59fIFYfgPyLnTi176EWHTq70LHgIhrBxhIT9IyTsHyFh/wgJ+0dI2D9Cwv4REvaPkLB/hIT9IyTsH+HjCJfIqYeexYRr6NRDzz5jv6QcH3roWwgoSZIkSdI/7AcDVnKZ4WlFUwAAAABJRU5ErkJggg==" />
                                    <Name>{user.name}</Name>
                                    <Email>{user.email}</Email>
                                </Row>
                            )

                        )}

                    </ListItems>
                    : null}

            </div>

        )
    }
}

export default Chips;

