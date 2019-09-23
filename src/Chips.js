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
    outline: none;
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
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXw8PBSy9n38vHV6OtEydh20t3P5+p9097p7u81x9bb6uxt0Nz+9PNIydhz0d1czdq54eeP1+DkuwpuAAABtElEQVR4nO3cQU4CURBFUaBBERR1/5vVGAfOLJNXbbWeu4CXOmmG5O92kiRJkiTpX3dZKp1Xngp2OB0LPdytO5XscL8vdCwJc1PJCAl7ppIREvZMJSMk7JlKRkjYM5WMkLBnKhkhYc9UMkLCnqlkhIQ9U8kICXumkhES9kwlIyTsmUpG+HnWcvi+xy0L97f7Qs9bFuYiJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCTckvAQO/5cecPhcltZ+PRSOqskXB4qrzisDHwnVq66lj70sv71sU6EhOMjJJwfIeH8CAnnR0g4P0LC+RESzo+QcH6EhPMjJJwfIeH8CAm/9nxat+vqwtNj4VGPYJfaVUlh7g88pZJXERL2REjYtZWLkLBrKxchYddWLkLCrq1chIRdW7kICbu2chESdm3lIiTs2spFSNi1lYuQsGsrF+GPhKU3FUqvF5QeoKg99RC8ane+q7SsfFbwqmQzf/DJCAnnR0g4P0LC+RESzo+QcH6EhPMjJJwfIeH8CAnnR0g4P0LC+RF+9HTbsPByLbwHcXvdsHBXexHit6+UJEmSJOkP9Abv0mNtxwb4GQAAAABJRU5ErkJggg=="
            },
            {
                name: "Anita Gros",
                email: "a.gros@example.com",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXw8PDb0ZXaz4/s6t/x8vXf16fr6Nvg2Kvs6+Le1aLZz43ZzYny8vbv7+za0JLi27Xn483c0plrEhTnAAAB+UlEQVR4nO3cS27bQBBFUYrU37Li7H+zQYYZsRqoZp6TcxdQfgfSzEIviyRJkiRJ+kf73Crdv++pZftY93s+zt/21LKtp/3el9KsyFOhswgJ82cREubPIiTMn0VImD+LkDB/FiFh/ixCwvxZhIT5swgJ82cREubPIiTMn/UXhK/zbq/7+i5UPHWw8PTzVujyuBSqnXofLTxVPp11q3w8t8qpCrBZWGm9Fv7e+VZaX4mQcDxCwtEICccjJByNkHA8QsLRCAnHIyQcjZBwPELC0QgJxyMkHI2QcLz/QVj4i69UYeGJg/X5VXnp4VI5dfz/8R/bdb+vZ2V87dTRv8V4X177l87Hn/KbqOBZhIT5swgJ82cREubPIiTMn0VImD+LkDB/FiFh/ixCwvxZhIT5swgJ82cREv5x61l66uFoYd+q5V566uHHwcLGVcuy/9DD7yqXOr9afas66xRmRkiYHyFhfoSE+RES5kdImB8hYX6EhPkREuZHSJgfIWF+hIT5hQo/Cy89bNu9cmr7qDwt8agIG1e1zio8B3G9bgevCv1qhf4mqjFCwlm3+iIknHWrL0LCWbf6IiScdasvQsJZt/oiJJx1qy9Cwlm3+iIknHWrL0LCWbf6IiScdasvQsJZt/oKfTWisdBXIxoLfTWis8xVkiRJkiSl9AtIg47mdoIOkgAAAABJRU5ErkJggg=="
            },
            {
                name: "Megan Smith",
                email: "m.smith@example.com",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXw8PDbjNDw8vHahc7x9fLbis/r2ejgpNfs3enfoNbaiM/Zg87is9zem9Tt4evv6+7Zfsznx+K4mbW3AAABa0lEQVR4nO3cQW6DQBBEUceMCeDEdu5/2Sj7KMyiekTE+wco8cQW+nKRJEmSJEl/dB3dcOBjGdxzsLCt92lor3nwW2zvt7ehTYSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhP9GuPWcS+haOqhw+5r3W9aeqYMKp7ntHy3pnTqosOOxCAmLIiSsmUpGSFgzlYyQsGYqGSFhzVQyQsKaqWSEhDVTyQgJa6aSERLWTCUjJKyZSkZIWDOV7AzC7bbfvU8Ym0rWPtaOPpexU9FaV6OnJEmSJEmSJEmSJEn6rf3/7H8aPRXs+lh6eo6dStbWe8fFi1fX1ya5qWRn+GKIkLBiKhkhYc1UMkLCmqlkhIQ1U8kICWumkhES1kwlIySsmUpGSFgzlYyQsGYqGSFhzVQyQsKaqWRnELoa4WpEyZQkSZIkSaftG+6EYTVDr4yTAAAAAElFTkSuQmCC"
            }
        ]
    }

    allUsers= [
        {
            name: "Nick Giannopoulos",
            email: "n.giannopoulus@example.com",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEXw8PCLlNT19fKEjtKJktSfptnd3uqkqtrZ2+mCjNLh4uv39vJ9iNHe4Ouaodj6+fPr7O/KzeWvtN2PmNWUnNbXA9SsAAAB50lEQVR4nO3cW26DAAxFwQQKLaTQ5/7X2g1Uwh82dZo5C7hihPhDvlwkSZIkSdJDt86R3k+eSmyYlvG415dzpzIbnp+ux40hYd5UZoSENVOZERLWTGVGSFgzlRkhYc1UZoSENVOZERLWTGVGSFgzlRkhYc1UZoSENVOZERLWTGVGSFgzldlDCAON82047C00tZwu/JwC7ftzoO/Q1Hay8HL8bobhti6R1zO9RcbOBsaax8AX9jQ1ffpIhIT9IyTsHyFh/wgJ+0dI2D9Cwv4REvaPkLB/hIT9IyTsHyFh+4YtJrz99YP+WuTUw/YREV730NmInlcjQsDrNbLU9GpEYk3/iSIkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/E/CyMWBuxbukYMQX3csHLfY5Y87Ft739RZCwoKpzAgJa6YyIySsmcqMkLBmKjNCwpqpzAgJa6YyIySsmcqMkLBmKjNCwpqpzAgJa6YyIySsmcrsFnyswMmLxKlg75EbDusUeqyP7dSpeQ0J59fIFYfgPyLnTi176EWHTq70LHgIhrBxhIT9IyTsHyFh/wgJ+0dI2D9Cwv4REvaPkLB/hIT9IyTsH+HjCJfIqYeexYRr6NRDzz5jv6QcH3roWwgoSZIkSdI/7AcDVnKZ4WlFUwAAAABJRU5ErkJggg=="
        },
        {
            name: "Narayana Garner",
            email: "n.garner@example.com",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXw8PBSy9n38vHV6OtEydh20t3P5+p9097p7u81x9bb6uxt0Nz+9PNIydhz0d1czdq54eeP1+DkuwpuAAABtElEQVR4nO3cQU4CURBFUaBBERR1/5vVGAfOLJNXbbWeu4CXOmmG5O92kiRJkiTpX3dZKp1Xngp2OB0LPdytO5XscL8vdCwJc1PJCAl7ppIREvZMJSMk7JlKRkjYM5WMkLBnKhkhYc9UMkLCnqlkhIQ9U8kICXumkhES9kwlIyTsmUpG+HnWcvi+xy0L97f7Qs9bFuYiJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCTckvAQO/5cecPhcltZ+PRSOqskXB4qrzisDHwnVq66lj70sv71sU6EhOMjJJwfIeH8CAnnR0g4P0LC+RESzo+QcH6EhPMjJJwfIeH8CAm/9nxat+vqwtNj4VGPYJfaVUlh7g88pZJXERL2REjYtZWLkLBrKxchYddWLkLCrq1chIRdW7kICbu2chESdm3lIiTs2spFSNi1lYuQsGsrF+GPhKU3FUqvF5QeoKg99RC8ane+q7SsfFbwqmQzf/DJCAnnR0g4P0LC+RESzo+QcH6EhPMjJJwfIeH8CAnnR0g4P0LC+RF+9HTbsPByLbwHcXvdsHBXexHit6+UJEmSJOkP9Abv0mNtxwb4GQAAAABJRU5ErkJggg=="
        },
        {
            name: "Anita Gros",
            email: "a.gros@example.com",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXw8PDb0ZXaz4/s6t/x8vXf16fr6Nvg2Kvs6+Le1aLZz43ZzYny8vbv7+za0JLi27Xn483c0plrEhTnAAAB+UlEQVR4nO3cS27bQBBFUYrU37Li7H+zQYYZsRqoZp6TcxdQfgfSzEIviyRJkiRJ+kf73Crdv++pZftY93s+zt/21LKtp/3el9KsyFOhswgJ82cREubPIiTMn0VImD+LkDB/FiFh/ixCwvxZhIT5swgJ82cREubPIiTMn/UXhK/zbq/7+i5UPHWw8PTzVujyuBSqnXofLTxVPp11q3w8t8qpCrBZWGm9Fv7e+VZaX4mQcDxCwtEICccjJByNkHA8QsLRCAnHIyQcjZBwPELC0QgJxyMkHI2QcLz/QVj4i69UYeGJg/X5VXnp4VI5dfz/8R/bdb+vZ2V87dTRv8V4X177l87Hn/KbqOBZhIT5swgJ82cREubPIiTMn0VImD+LkDB/FiFh/ixCwvxZhIT5swgJ82cREv5x61l66uFoYd+q5V566uHHwcLGVcuy/9DD7yqXOr9afas66xRmRkiYHyFhfoSE+RES5kdImB8hYX6EhPkREuZHSJgfIWF+hIT5hQo/Cy89bNu9cmr7qDwt8agIG1e1zio8B3G9bgevCv1qhf4mqjFCwlm3+iIknHWrL0LCWbf6IiScdasvQsJZt/oiJJx1qy9Cwlm3+iIknHWrL0LCWbf6IiScdasvQsJZt/oKfTWisdBXIxoLfTWis8xVkiRJkiSl9AtIg47mdoIOkgAAAABJRU5ErkJggg=="
        },
        {
            name: "Megan Smith",
            email: "m.smith@example.com",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXw8PDbjNDw8vHahc7x9fLbis/r2ejgpNfs3enfoNbaiM/Zg87is9zem9Tt4evv6+7Zfsznx+K4mbW3AAABa0lEQVR4nO3cQW6DQBBEUceMCeDEdu5/2Sj7KMyiekTE+wco8cQW+nKRJEmSJEl/dB3dcOBjGdxzsLCt92lor3nwW2zvt7ehTYSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhP9GuPWcS+haOqhw+5r3W9aeqYMKp7ntHy3pnTqosOOxCAmLIiSsmUpGSFgzlYyQsGYqGSFhzVQyQsKaqWSEhDVTyQgJa6aSERLWTCUjJKyZSkZIWDOV7AzC7bbfvU8Ym0rWPtaOPpexU9FaV6OnJEmSJEmSJEmSJEn6rf3/7H8aPRXs+lh6eo6dStbWe8fFi1fX1ya5qWRn+GKIkLBiKhkhYc1UMkLCmqlkhIQ1U8kICWumkhES1kwlIySsmUpGSFgzlYyQsGYqGSFhzVQyQsKaqWRnELoa4WpEyZQkSZIkSaftG+6EYTVDr4yTAAAAAElFTkSuQmCC"
        }
    ]

    showList = (e) => {
        e.preventDefault();
        this.setState({ 
            show: true,
            users: this.allUsers.filter(k => !this.state.value.includes(k.name))        
        })
    }

    handleChange =(e) => {
        e.preventDefault();
        this.setState({            
            text:e.target.value,
            users: this.state.users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase())),
            show: true
        })
    }

    listItemClicked = (e, name) => {
        e.preventDefault();
        this.setState((state) => ({
            value: [...this.state.value, name],
            users: state.users.filter(user => user.name !== name),
            text: "",
            show: false
        })
        );

    }

    handleDelete = (username) => {
        this.setState((state) => ({
            value: this.state.value.filter(v => v !== username),
            users: state.users.concat(this.allUsers.filter(user=> user.name===username))
        })
        );
        
    }

    onKeyDown = (e) => {
        if (e.keyCode === 8) {
            this.setState({            
                users: this.allUsers.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase().substring(0,e.target.value.length-1))),
                show: true
            })
                }
      }


    render() {
        return (
            <div>
                <Enteries>
                    {this.state.value.map((username, index) => (
                        <div key={index}>
                            {username}
                            <button
                                type="button"
                                onClick={() => this.handleDelete(username)}
                            >
                                &times;
                    </button>
                        </div>
                    ))}
                    <Input type="text" value={this.state.text} onClick={this.showList} onChange={this.handleChange} onKeyDown={this.onKeyDown} />
                </Enteries>

                {this.state.show ?
                    <ListItems>
                        {this.state.users.map((user, index) =>
                            (
                                <Row onClick={e => this.listItemClicked(e, user.name)} key={index}>
                                <ProfilePic src={user.image} />
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

