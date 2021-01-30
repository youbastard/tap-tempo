// import Loader from '../Loader';
import tw from './App.tailwind';

export default {
  name: 'App',
  components: {},
  data () {
    return {
      tw,
      debounce: 3000,
      taps: [],
      active: false
    }
  },
  computed: {
    avgTempo: (vm) => {
      const start = vm.taps[0];
      const end = vm.taps[vm.taps.length-1];
      const elapsed = (end-start) / 60000;
      return Math.round((vm.taps.length / elapsed));
    }
  },
  methods: {
    onTap () {
      this.taps.push(Date.now());
      while (this.taps.length > 5) {
        this.taps.shift();
      }
    }
  }
}