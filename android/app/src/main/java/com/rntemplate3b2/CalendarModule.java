package com.rntemplate3b2; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.widget.Toast;

import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import android.util.Log;

public class CalendarModule extends ReactContextBaseJavaModule {
   CalendarModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
    public String getName() {
        return "CalendarModule";
    }

    // @ReactMethod(isBlockingSynchronousMethod = true)
    // public String testSynchronousMethod(String name, String location) {
    //     return name;
    // }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        // Log.d("CalendarModule", "Create event called with name: " + name + " and location: " + location);
        Toast.makeText(this.getReactApplicationContext(),name,Toast.LENGTH_SHORT).show();


        WritableMap params = Arguments.createMap();
        params.putString("eventProperty", "someValue");
        params.putString("firstName", "Firdous");
        params.putString("lastName", "Ali");

        sendEvent(this.getReactApplicationContext(), "EventReminder", params);
    }

    @ReactMethod
    public void testMethodForCallback(String name, Callback callBack) {
        callBack.invoke(name);
    }

    @ReactMethod
    public void testMethodForPromise(String name, Promise promise) {
        try {
            promise.resolve(name);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    private void sendEvent(ReactContext reactContext,
                      String eventName,
                       WritableMap params) {
        reactContext
     .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
     .emit(eventName, params);
    }

    private int listenerCount = 0;

    @ReactMethod
    public void addListener(String eventName) {
        if (listenerCount == 0) {
            // Set up any upstream listeners or background tasks as necessary
        }

      listenerCount += 1;
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        listenerCount -= count;
        if (listenerCount == 0) {
            // Remove upstream listeners, stop unnecessary background tasks
          }
    }
}