# Angular onRootAnimationComplete:
## Workaround for structural animations not running on application startup

During the first digest of the application, ```$rootElement.data('$$ngAnimateState').running```
is set to true, which stops any structural animations from playing. This service
keeps checking for when the value changes to false and let's us know when we can
start playing animations.