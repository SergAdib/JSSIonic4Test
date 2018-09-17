
export const fakeGlobals = {
        doc: (typeof document === 'undefined') ? {
            body: {},
            addEventListener: function addeventlistener() {},
            removeEventListener: function removeeventlistener() {},
            activeElement: {
              blur: function blur() {},
              nodename: '',
            },
            querySelector: function queryselector() {
              return null;
            },
            querySelectorAll: function queryselectorall() {
              return [];
            },
            getElementById: function getelementbyid() {
              return null;
            },
            createEvent: function createevent() {
              return {
                initevent: function initevent() {},
              };
            },
            createElement: function createelement() {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function setattribute() {},
                getElementsByTagName: function getelementsbytagname() {
                  return [];
                },
              };
            },
            location: { hash: '' },
          } : document,

          win: (typeof window === 'undefined') ? {
            document: this.doc,
            navigator: {
              useragent: '',
            },
            location: {},
            history: {},
            customEvent: function customevent() {
              return this;
            },
            addEventListener: function addeventlistener() {},
            removeEventListener: function removeeventlistener() {},
            getComputedStyle: function getcomputedstyle() {
              return {
                getpropertyvalue: function getpropertyvalue() {
                  return '';
                },
              };
            },
            Blob: function blob(o) {return o},
            URL: function image() {},
            image: function image() {},
            date: function date() {},
            screen: {},
            setTimeout: function settimeout() {},
            clearTimeout: function cleartimeout() {},
          } : window
  }

