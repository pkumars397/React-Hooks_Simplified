1.) useState hook must execute in same order .and it cann't be used inside if statements,inside a function ,inside loop.it must be not nested.

2.) can use multiple states inside one functional component.

3.) if initial state is object then,keep in mind that when we modify the state ,we should first copy our state and then modify one part of that object state.otherwise it will destroy the other key.and

