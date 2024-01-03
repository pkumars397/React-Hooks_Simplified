1.) useEffect is used for side effects ,like calling an API . Or when some state changes in our app ,do run the useEffect.

2.) it takes dependecy,if no dependecy ,then it will be called on each render .if empty dependency then it will only be called after initial render.if it has some dependency ,then the dependecy changes then each time useEffect will run.API

3.) for cleanup on unmounting the certain Component.it returns a function ,in which we can cleanup.

=>cleanup funtion execution=> it will always execute on the time of the unmounting the Component.and also it will run before next execution of the useEffect.
