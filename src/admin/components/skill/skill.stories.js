import skill from "./skill";
import { action } from "@storybook/addon-actions";

const methods = {
  onAprrove:action('onApprove'),
  onRemove:action('onRemove')
}

export default {
  title: "skill",
  components: {skill}
}

export const defaultView = () => ({
  components: {skill},
  data(){
    return{
      skill:{
        id:0,
        title:"Test",
        percent:20
      }
    }
  },
  template: `
    <skill @approve="onAprrove"  @remove="onRemove" :skill="skill" /> 
  `,
  methods
})