import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class TopicDeliveryBase {

//#region topicId Prop
        @prop()
        topicId : number;
//#endregion topicId Prop


//#region deliveryId Prop
        @prop()
        deliveryId : number;
//#endregion deliveryId Prop



}