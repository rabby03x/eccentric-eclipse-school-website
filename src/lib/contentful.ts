import contentful, { type EntryFieldType, type EntryFieldTypes } from "contentful";


export interface NoticeItem {
  contentTypeId: "noticeBoard",
  fields: {
    title: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText,
    thumnail: EntryFieldTypes.AssetLink,
    attachments: EntryFieldTypes.AssetLink,
    slug: EntryFieldTypes.Text
  }
}


export interface UsefulLinks{
  contentTypeId: "usefulLinks",
  fields: {
    title: EntryFieldTypes.Text,
    link: EntryFieldTypes.RichText
  }
}

export interface FooterLink{
  contentTypeId: "footer",
  fields: {
    title: EntryFieldTypes.Text,
    type: EntryFieldTypes.Text,
    link: EntryFieldTypes.Text
  }
}


export interface Events
{
  contentTypeId: "events"
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    thumbnail: EntryFieldTypes.AssetLink,
    content: EntryFieldTypes.RichText
  }
}

export interface SpeechOfHead{
  contentTypeId: "speechOfHead",
  fields: {
    title: EntryFieldTypes.Text,
    content: EntryFieldTypes.Text,
    headPhoto: EntryFieldTypes.AssetLink
  }
}

export interface SliderX{
  contentTypeId: "slider",
  fields: {
    image1: EndtryFieldTypes.AssetLink,
    image2: EntryFieldType.AssetLink,
    image3: EntryFieldType.AssetLink,
    image4: EntryFieldType.AssetLink
  }
}


export interface StudentItem {
  contentTypeId: "studentList",
  fields: {
    title: EntryFieldTypes.Text,
    year: EntryFieldType.Integer,
    classx: EntryFieldType.Text,
    section: EntryFieldType.Text,
    pdf: EntryFieldTypes.AssetLink
  }
}

export interface AboutInstitution {
  contentTypeId: "aboutInstitution",
  fields: {
    title: EntryFieldType.Text,
    slug: EntryFieldType.Text,
    content: EntryFieldType.RichText
  }
}

export interface UiContent {
  contentTypeId: "uiContent",
  fields: {
    pageName: EntryFieldType.Text,
    slug: EntryFieldType.Text,
    pageContent: EntryFieldType.RichText
  }
}


export interface Downloads {
  contentTypeId: "downloads",
  fields: {
    title: EntryFieldType.Text,
    type: EntryFieldType.Text,
    slug: EntryFieldType.Text,
    fileLink: EntryFieldType.RichText
  }
}


export interface AcademicInformation{
  contentTypeId: "academicInformation",
  fields: {
    title: EntryFieldType.Text,
    slug: EntryFieldType.Text,
    content: EntryFieldType.RichText
  }
}


export interface AdministrationInformation {
  contentTypeId: "administrationInformation",  
  fields: {
    title: EntryFieldType.Text,
    content: EntryFieldType.RichText
  }
}

export interface TeacherItem {
  contentTypeId: "teacher",
  fields: {
    photo: EntryFieldTypes.AssetLink
    firstName: EntryFieldTypes.Text,
    lastName: EntryFieldTypes.Text,
    subject: EntryFieldTypes.Text,
    email: EntryFieldTypes.Text,
    phone: EntryFieldTypes.Text
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});