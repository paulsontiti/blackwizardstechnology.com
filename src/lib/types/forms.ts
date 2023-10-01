export type Option = {
  label: string;
};
export type QuestionOption = {
  question: string;
};
export type BlackInputTextFieldProps = {
    label: string;
    onChange:(value:string)=>void
    onBlur:()=>void,
    errorMessage:string | undefined
    helperText?:string
  };
  export type BlackAutoCompleteProps = {
    options: Option[];
    label:string,
    placeholder:string,
    helperText:string
    onChange:(value:Option | null )=>void
  };
  export type BlackAutoCompleteFreeSoloProps = {
    options: QuestionOption[];value:string;
    label:string,
    placeholder:string,
    helperText:string
    onChange:(value:null | string)=>void
  };

  export const states = [
    {
      id: 1,
      label: "Abia",
    
    },
  
    {
      id: 2,
      label: "Adamawa",
     
    },
  
    {
      id: 3,
      label: "Akwa-Ibom",
     
    },
  
    {
      id: 4,
      label: "Anambra",
     
    },
  
    {
      id: 5,
      label: "Bauchi",
    
    },
  
    {
      id: 6,
      label: "Bayelsa",
    
    },
  
    {
      id: 7,
      label: "Benue",
    
    },
  
    {
      id: 8,
      label: "Borno",
     
    },
  
    {
      id: 9,
      label: "Cross-River",
     
    },
  
    {
      id: 10,
      label: "Delta",
    
    },
  
    {
      id: 11,
      label: "Ebonyi",
    
    },
  
    {
      id: 12,
      label: "Enugu",
     
    },
  
    {
      id: 13,
      label: "Edo",
     
    },
  
    {
      id: 14,
      label: "Ekiti",
     
    },
  
    {
      id: 15,
      label: "FCT",
    
    },
  
    {
      id: 16,
      label: "Gombe",
     
    },
  
    {
      id: 17,
      label: "Imo",
    
    },
  
    {
      id: 18,
      label: "Jigawa",
    
    },
  
    {
      id: 19,
      label: "Kaduna",
     
    },
  
    {
      id: 20,
      label: "Kano",
     
    },
  
    {
      id: 21,
      label: "Kastina",
      
    },
  
    {
      id: 22,
      label: "Kebbi",
   
    },
  
    {
      id: 23,
      label: "Kogi",
    
    },
  
    {
      id: 24,
      label: "Kwara",
     
    },
  
    {
      id: 25,
      label: "Lagos",
      
    },
  
    {
      id: 26,
      label: "Nasarawa",
     
    },
  
    {
      id: 27,
      label: "Niger",
    
    },
  
    {
      id: 28,
      label: "Ogun",
    
    },
  
    {
      id: 29,
      label: "Ondo",
     
    },
  
    {
      id: 30,
      label: "Osun",
     
    },
  
    {
      id: 31,
      label: "Oyo",
    
    },
  
    {
      id: 32,
      label: "Plateau",
     
    },
  
    {
      id: 33,
      label: "Rivers",
     
    },
  
    {
      id: 34,
      label: "Sokoto",
      
    },
  
    {
      id: 35,
      label: "Taraba",
     
    },
  
    {
      id: 36,
      label: "Yobe",
   
    },
  
    {
      id: 37,
      label: "Zamfara",
    
    },
  ];
  export type ProfileType = {
    firstName: string;
    lastName: string;
    phone: string;
    city: string;
    state: string;
    address: string;
    dob: Date | null;
    userId:string,
    bio?:string,
    dpFileName?:string,
    sponsorsDetails: Sponsor;
  };
  export type Sponsor = {
    firstName: string;
    lastName: string;
    title?: string;
    phone: string;
    email: string;
  };

  export type ResetPasswordType={
    userName:string
    password:string,
    confirmPassword:string
  }