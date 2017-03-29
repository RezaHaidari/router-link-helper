import parser from 'ua-parser-js'

export default{

      name: 'router-link-helper',
      props:['_blank'],
      functional: true,
      render (h, { data, children, props }) {
          // if device type name in _blank array prop return true
        function isBlank(type, arrayType) {
          return arrayType.find(res => {
            return res === type;
          });
        }

        // check if has _blank prop and in browser context
        if (typeof window !== 'undefined' && props._blank) {
          let type = parser(navigator.userAgent).device.type;
          if (!type) type = 'desktop';
          if (isBlank(type, props._blank)) {
            data.attrs['target'] = '_blank';
          }

        }

        // create and return custom router-link
        return h('router-link', data, children)
  }
}
