import {addPostAC, deletePostAC, profileReducer} from "./profileReducer";

let state = {
    postsData: [
        {message: 'Hi, how are you?', id: 1, counts: 15},
        {message: "It's my first post", id: 2, counts: 45},
        {message: 'Yo, Yo!', id: 3, counts: 15},
        {message: "Hello!", id: 4, counts: 45}
    ],
    profile: null,
    status: ''
}

test('length post should be incremented', () => {
    // 1 test data
    let action = addPostAC('Igor_Best')

    // 2 action
    let newState = profileReducer(state, action)

    // 3 expectation
    expect(newState.postsData.length).toBe(5)
});

test('message of new post should be correct', () => {
    // 1 test data
    let action = addPostAC('Igor_Best')

    // 2 action
    let newState = profileReducer(state, action)

    // 3 expectation
    expect(newState.postsData[4].message).toBe('Igor_Best')
});

test('after deleting length of messages should be decrement', () => {
    // 1 test data
    let action = deletePostAC(1)

    // 2 action
    let newState = profileReducer(state, action)

    // 3 expectation
    expect(newState.postsData.length).toBe(3)
});

test("after deleting length shouldn't be decrement if id is incorrect", () => {
    // 1 test data
    let action = deletePostAC(1000)

    // 2 action
    let newState = profileReducer(state, action)

    // 3 expectation
    expect(newState.postsData.length).toBe(4)
});

