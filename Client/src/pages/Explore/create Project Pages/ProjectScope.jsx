import React,{useState,useEffect,useCallback  } from 'react'
import style from "./style/CreatProject.module.css"
import NavBar from '../../../component/NavBar'
import { Input,Button,Tag} from 'antd';
import { InputNumber } from 'antd';
import { Select } from 'antd';
import { useLocation } from 'react-router-dom';
const { TextArea } = Input;
import { Steps } from 'antd';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import API_URL from '../../../component/API_URL';
import Box from '@mui/material/Box';
import { message } from 'antd';
import LinearProgress from '@mui/material/LinearProgress';
const options = [
  { value: '.NET' },
  { value: '360-degree video' },
  { value: '3D Animation' },
  { value: '3D Design' },
  { value: '3D Model Maker' },
  { value: '3D Modelling' },
  { value: '3D Printing' },
  { value: '3D Rendering' },
  { value: '3ds Max' },
  { value: '4D' },
  { value: 'Academic Writing' },
  { value: 'Accounting' },
  { value: 'ActionScript' },
  { value: 'Active Directory' },
  { value: 'Ad Planning / Buying' },
  { value: 'Adobe Air' },
  { value: 'Adobe Captivate' },
  { value: 'Adobe Dreamweaver' },
  { value: 'Adobe Fireworks' },
  { value: 'Adobe Flash' },
  { value: 'Adobe InDesign' },
  { value: 'Adobe Lightroom' },
  { value: 'Adobe LiveCycle Designer' },
  { value: 'Adobe Premiere Pro' },
  { value: 'Advertisement Design' },
  { value: 'Advertising' },
  { value: 'Aeronautical Engineering' },
  { value: 'Aerospace Engineering' },
  { value: 'Affiliate Marketing' },
  { value: 'Afrikaans' },
  { value: 'After Effects' },
  { value: 'Agile Development' },
  { value: 'Agronomy' },
  { value: 'Air Conditioning' },
  { value: 'Airbnb' },
  { value: 'AJAX' },
  { value: 'Albanian' },
  { value: 'Algorithm' },
  { value: 'Alibaba' },
  { value: 'Amazon Fire' },
  { value: 'Amazon Kindle' },
  { value: 'Amazon Web Services' },
  { value: 'AMQP' },
  { value: 'Analytics' },
  { value: 'Android' },
  { value: 'Android Honeycomb' },
  { value: 'Android Wear SDK' },
  { value: 'Angular.js' },
  { value: 'Animation' },
  { value: 'Antenna Services' },
  { value: 'Anything Goes' },
  { value: 'Apache' },
  { value: 'Apache Ant' },
  { value: 'Apache Solr' },
  { value: 'App Designer' },
  { value: 'App Developer' },
  { value: 'Appcelerator Titanium' },
  { value: 'Apple Compressor' },
  { value: 'Apple iBooks Author' },
  { value: 'Apple Logic Pro' },
  { value: 'Apple Motion' },
  { value: 'Apple Safari' },
  { value: 'Apple Watch' },
  { value: 'Applescript' },
  { value: 'Appliance Installation' },
  { value: 'Appliance Repair' },
  { value: 'Arabic' },
  { value: 'Arduino' },
  { value: 'Argus Monitoring Software' },
  { value: 'Article Rewriting' },
  { value: 'Article Submission' },
  { value: 'Articles' },
  { value: 'Artificial Intelligence' },
  { value: 'Arts / Crafts' },
  { value: 'AS400 / iSeries' },
  { value: 'Asbestos Removal' },
  { value: 'ASP' },
  { value: 'ASP.NET' },
  { value: 'Asphalt' },
  { value: 'Assembly' },
  { value: 'Asterisk PBX' },
  { value: 'Astrophysics' },
  { value: 'Attic Access Ladders' },
  { value: 'Attorney' },
  { value: 'Audio Production' },
  { value: 'Audio Services' },
  { value: 'Audit' },
  { value: 'Augmented Reality' },
  { value: 'AutoCAD' },
  { value: 'Autodesk Inventor' },
  { value: 'Autodesk Revit' },
  { value: 'AutoHotkey' },
  { value: 'Automotive' },
  { value: 'Autotask' },
  { value: 'Awnings' },
  { value: 'Axure' },
  { value: 'Azure' },
  { value: 'backbone.js' },
  { value: 'Balsamiq' },
  { value: 'Balustrading' },
  { value: 'Bamboo Flooring' },
  { value: 'Banner Design' },
  { value: 'Basque' },
  { value: 'Bathroom' },
  { value: 'Bengali' },
  { value: 'Big Data' },
  { value: 'BigCommerce' },
  { value: 'Binary Analysis' },
  { value: 'Biology' },
  { value: 'Biotechnology' },
  { value: 'Bitcoin' },
  { value: 'Biztalk' },
  { value: 'Blackberry' },
  { value: 'Blog' },
  { value: 'Blog Design' },
  { value: 'Blog Install' },
  { value: 'Bluetooth Low Energy (BLE)' },
  { value: 'BMC Remedy' },
  { value: 'Book Artist' },
  { value: 'Book Writing' },
  { value: 'Bookkeeping' },
  { value: 'Boonex Dolphin' },
  { value: 'Bootstrap' },
  { value: 'Bosnian' },
  { value: 'Bower' },
  { value: 'BPO' },
  { value: 'Brackets' },
  { value: 'Brain Storming' },
  { value: 'Branding' },
  { value: 'Bricklaying' },
  { value: 'Broadcast Engineering' },
  { value: 'Brochure Design' },
  { value: 'BSD' },
  { value: 'Building' },
  { value: 'Building Architecture' },
  { value: 'Building Certifiers' },
  { value: 'Building Consultants' },
  { value: 'Building Designer' },
  { value: 'Building Surveyors' },
  { value: 'Bulgarian' },
  { value: 'Bulk Marketing' },
  { value: 'Business Analysis' },
  { value: 'Business Cards' },
  { value: 'Business Catalyst' },
  { value: 'Business Coaching' },
  { value: 'Business Intelligence' },
  { value: 'Business Plans' },
  { value: 'Business Writing' },
  { value: 'Buyer Sourcing' },
  { value: 'C Programming' },
  { value: 'C# Programming' },
  { value: 'C++ Programming' },
  { value: 'CAD/CAM' },
  { value: 'CakePHP' },
  { value: 'Call Center' },
  { value: 'Call Control XML' },
  { value: 'Capture NX2' },
  { value: 'Caricature / Cartoons' },
  { value: 'Carpentry' },
  { value: 'Carpet Repair / Laying' },
  { value: 'Carports' },
  { value: 'Cartography / Maps' },
  { value: 'Carwashing' },
  { value: 'CasperJS' },
  { value: 'Cassandra' },
  { value: 'Catalan' },
  { value: 'Catch Phrases' },
  { value: 'CATIA' },
  { value: 'Ceilings' },
  { value: 'Cement Bonding Agents' },
  { value: 'CGI' },
  { value: 'Chef Configuration Management' },
  { value: 'Chemical Engineering' },
  { value: 'Chordiant' },
  { value: 'Christmas' },
  { value: 'Chrome OS' },
  { value: 'Cinema 4D' },
  { value: 'Circuit Design' },
  { value: 'Cisco' },
  { value: 'Civil Engineering' },
  { value: 'Classifieds Posting' },
  { value: 'Clean Technology' },
  { value: 'Cleaning Carpet' },
  { value: 'Cleaning Domestic' },
  { value: 'Cleaning Upholstery' },
  { value: 'Climate Sciences' },
  { value: 'CLIPS' },
  { value: 'Clothesline' },
  { value: 'Cloud Computing' },
  { value: 'CMS' },
  { value: 'Coating Materials' },
  { value: 'COBOL' },
  { value: 'Cocoa' },
  { value: 'Codeigniter' },
  { value: 'Coding' },
  { value: 'Cold Fusion' },
  { value: 'Columns' },
  { value: 'Commercial Cleaning' },
  { value: 'Commercials' },
  { value: 'Communications' },
  { value: 'Compliance' },
  { value: 'Computer Graphics' },
  { value: 'Computer Help' },
  { value: 'Computer Security' },
  { value: 'Concept Art' },
  { value: 'Concept Design' },
  { value: 'Concreting' },
  { value: 'Construction Monitoring' },
  { value: 'Content Writing' },
  { value: 'Contracts' },
  { value: 'Conversion Rate Optimisation' },
  { value: 'Cooking / Recipes' },
  { value: 'Cooking / Baking' },
  { value: 'Copy Typing' },
  { value: 'Copywriting' },
  { value: 'Corporate Identity' },
  { value: 'Courses' },
  { value: 'Covers / Packaging' },
  { value: 'CRE Loaded' },
  { value: 'Creative Design' },
  { value: 'Creative Writing' },
  { value: 'CRM' },
  { value: 'Croatian' },
  { value: 'Cryptography' },
  { value: 'Crystal Reports' },
  { value: 'CS-Cart' },
  { value: 'CSS' },
  { value: 'CubeCart' },
  { value: 'CUDA' },
  { value: 'Customer Service' },
  { value: 'Customer Support' },
  { value: 'Czech' },
  { value: 'Damp Proofing' },
  { value: 'Danish' },
  { value: 'Dari' },
  { value: 'Dart' },
  { value: 'Data Entry' },
  { value: 'Data Mining' },
  { value: 'Data Processing' },
  { value: 'Data Science' },
  { value: 'Data Warehousing' },
  { value: 'Database Administration' },
  { value: 'Database Development' },
  { value: 'Database Programming' },
  { value: 'DataLife Engine' },
  { value: 'Dating' },
  { value: 'DDS' },
  { value: 'Debian' },
  { value: 'Debugging' },
  { value: 'Decking' },
  { value: 'Decoration' },
  { value: 'Delivery' },
  { value: 'Delphi' },
  { value: 'Demolition' },
  { value: 'Design' },
  { value: 'Desktop Support' },
  { value: 'Digital Design' },
  { value: 'Disposals' },
  { value: 'Django' },
  { value: 'DNS' },
  { value: 'DOS' },
  { value: 'DotNetNuke' },
  { value: 'Drafting' },
  { value: 'Drains' },
  { value: 'Drones' },
  { value: 'Drupal' },
  { value: 'Dthreejs' },
  { value: 'Dutch' },
  { value: 'Dynamics' },
  { value: 'eBay' },
  { value: 'eBooks' },
  { value: 'eCommerce' },
  { value: 'Editing' },
  { value: 'Education / Tutoring' },
  { value: 'edX' },
  { value: 'Elasticsearch' },
  { value: 'eLearning' },
  { value: 'eLearning Designer' },
  { value: 'Electrical Engineering' },
  { value: 'Electricians' },
  { value: 'Electronic Forms' },
  { value: 'Electronics' },
  { value: 'Email Developer' },
  { value: 'Email Handling' },
  { value: 'Email Marketing' },
  { value: 'Embedded Software' },
  { value: 'Ember.js' },
  { value: 'Employment Law' },
  { value: 'Energy' },
  { value: 'Engineering' },
  { value: 'Engineering Drawing' },
  { value: 'English (UK)' },
  { value: 'English (US)' },
  { value: 'English Grammar' },
  { value: 'English Spelling' },
  { value: 'Entrepreneurship' },
  { value: 'ePub' },
  { value: 'Equipment Hire' },
  { value: 'Erlang' },
  { value: 'ERP' },
  { value: 'Estonian' },
  { value: 'Etsy' },
  { value: 'Event Planning' },
  { value: 'Event Staffing' },
  { value: 'Excavation' },
  { value: 'Excel' },
  { value: 'Express JS' },
  { value: 'Expression Engine' },
  { value: 'Extensions / Additions' },
  { value: 'Face Recognition' },
  { value: 'Facebook Marketing' },
  { value: 'Fashion Design' },
  { value: 'Fashion Modeling' },
  { value: 'Fencing' },
  { value: 'Feng Shui' },
  { value: 'Fiction' },
  { value: 'FileMaker' },
  { value: 'Filipino' },
  { value: 'Filmmaking' },
  { value: 'Final Cut Pro' },
  { value: 'FileMaker' },
  { value: 'Filipino' },
  { value: 'Filmmaking' },
  { value: 'Final Cut Pro' },
  { value: 'Finale / Sibelius' },
  { value: 'Finance' },
  { value: 'Financial Analysis' },
  { value: 'Financial Markets' },
  { value: 'Financial Planning' },
  { value: 'Financial Research' },
  { value: 'Finite Element Analysis' },
  { value: 'Finnish' },
  { value: 'Firefox' },
  { value: 'Flash 3D' },
  { value: 'Flashmob' },
  { value: 'Flex' },
  { value: 'Floor Coatings' },
  { value: 'Flooring' },
  { value: 'Flow Charts' },
  { value: 'Flyer Design' },
  { value: 'Flyscreens' },
  { value: 'Food Takeaway' },
  { value: 'Format / Layout' },
  { value: 'Fortran' },
  { value: 'Forum Posting' },
  { value: 'Forum Software' },
  { value: 'FPGA' },
  { value: 'Frames / Trusses' },
  { value: 'Freelance' },
  { value: 'FreelancerAPI' },
  { value: 'FreeSwitch' },
  { value: 'French' },
  { value: 'French (Canadian)' },
  { value: 'Fundraising' },
  { value: 'Furniture Assembly' },
  { value: 'Furniture Design' },
  { value: 'Game Consoles' },
  { value: 'Game Design' },
  { value: 'Game Development' },
  { value: 'GameSalad' },
  { value: 'Gamification' },
  { value: 'GarageBand' },
  { value: 'Gardening' },
  { value: 'Gas Fitting' },
  { value: 'Genealogy' },
  { value: 'General Labor' },
  { value: 'General Office' },
  { value: 'Genetic Engineering' },
  { value: 'Geolocation' },
  { value: 'Geology' },
  { value: 'Geospatial' },
  { value: 'Geotechnical Engineering' },
  { value: 'German' },
  { value: 'Ghostwriting' },
  { value: 'GIMP' },
  { value: 'Git' },
  { value: 'Glass / Mirror / Glazing' },
  { value: 'Golang' },
  { value: 'Google Adsense' },
  { value: 'Google Adwords' },
  { value: 'Google Analytics' },
  { value: 'Google App Engine' },
  { value: 'Google Cardboard' },
  { value: 'Google Chrome' },
  { value: 'Google Cloud Storage' },
  { value: 'Google Earth' },
  { value: 'Google Maps API' },
  { value: 'Google Plus' },
  { value: 'Google SketchUp' },
  { value: 'Google Web Toolkit' },
  { value: 'Google Webmaster Tools' },
  { value: 'Google Website Optimizer' },
  { value: 'GoPro' },
  { value: 'GPGPU' },
  { value: 'GPS' },
  { value: 'Grails' },
  { value: 'Grant Writing' },
  { value: 'Graphic Design' },
  { value: 'Grease Monkey' },
  { value: 'Greek' },
  { value: 'Growth Hacking' },
  { value: 'Grunt' },
  { value: 'Guttering' },
  { value: 'Hadoop' },
  { value: 'Hair Styles' },
  { value: 'Handyman' },
  { value: 'Haskell' },
  { value: 'HBase' },
  { value: 'Health' },
  { value: 'Heating Systems' },
  { value: 'Hebrew' },
  { value: 'Helpdesk' },
  { value: 'Heroku' },
  { value: 'Hindi' },
  { value: 'Hire me' },
  { value: 'History' },
  { value: 'Hive' },
  { value: 'Home Automation' },
  { value: 'Home Design' },
  { value: 'Home Organization' },
  { value: 'HomeKit' },
  { value: 'Hot Water' },
  { value: 'House Cleaning' },
  { value: 'Housework' },
  { value: 'HP Openview' },
  { value: 'HTML' },
  { value: 'HTML5' },
  { value: 'Human Resources' },
  { value: 'Human Sciences' },
  { value: 'Hungarian' },
  { value: 'iBeacon' },
  { value: 'IBM BPM' },
  { value: 'IBM Tivoli' },
  { value: 'IBM Websphere Transformation Tool' },
  { value: 'Icon Design' },
  { value: 'IIS' },
  { value: 'IKEA Installation' },
  { value: 'Illustration' },
  { value: 'Illustrator' },
  { value: 'Imaging' },
  { value: 'iMovie' },
  { value: 'Indonesian' },
  { value: 'Industrial Design' },
  { value: 'Industrial Engineering' },
  { value: 'Infographics' },
  { value: 'Inspections' },
  { value: 'Instagram' },
  { value: 'Installation' },
  { value: 'Instrumentation' },
  { value: 'Insurance' },
  { value: 'Interior Design' },
  { value: 'Interiors' },
  { value: 'Internet Marketing' },
  { value: 'Internet Research' },
  { value: 'Internet Security' },
  { value: 'Interpreter' },
  { value: 'Interspire' },
  { value: 'Intuit QuickBooks' },
  { value: 'Inventory Management' },
  { value: 'Investment Research' },
  { value: 'Invitation Design' },
  { value: 'Ionic Framework' },
  { value: 'iPad' },
  { value: 'iPhone' },
  { value: 'ISO9001' },
  { value: 'Italian' },
  { value: 'ITIL' },
  { value: 'J2EE' },
  { value: 'J2ME' },
  { value: 'Jabber' },
  { value: 'Japanese' },
  { value: 'Java' },
  { value: 'JavaFX' },
  { value: 'Javascript' },
  { value: 'JD Edwards CNC' },
  { value: 'JDF' },
  { value: 'Jewellery' },
  { value: 'Joomla' },
  { value: 'Journalist' },
  { value: 'jQuery / Prototype' },
  { value: 'JSON' },
  { value: 'JSP' },
  { value: 'Kannada' },
  { value: 'Kitchen' },
{ value: 'Knockout.js' },
{ value: 'Korean' },
{ value: 'Label Design' },
{ value: 'LabVIEW' },
{ value: 'Landing Pages' },
{ value: 'Landscape Design' },
{ value: 'Landscaping' },
{ value: 'Landscaping / Gardening' },
{ value: 'Laravel' },
{ value: 'LaTeX' },
{ value: 'Latvian' },
{ value: 'Laundry and Ironing' },
{ value: 'Lawn Mowing' },
{ value: 'Leads' },
{ value: 'Leap Motion SDK' },
{ value: 'Legal' },
{ value: 'Legal Research' },
{ value: 'Legal Writing' },
{ value: 'LESS/Sass/SCSS' },
{ value: 'Life Coaching' },
{ value: 'Lighting' },
{ value: 'Linear Programming' },
{ value: 'Link Building' },
{ value: 'Linkedin' },
{ value: 'Linnworks Order Management' },
{ value: 'LINQ' },
{ value: 'Linux' },
{ value: 'Lisp' },
{ value: 'Lithuanian' },
{ value: 'LiveCode' },
{ value: 'Locksmith' },
{ value: 'Logistics / Shipping' },
{ value: 'Logo Design' },
{ value: 'Lotus Notes' },
{ value: 'Lua' },
{ value: 'Mac OS' },
{ value: 'Macedonian' },
{ value: 'Machine Learning' },
{ value: 'Magento' },
{ value: 'Magic Leap' },
{ value: 'Mailchimp' },
{ value: 'Mailwizz' },
{ value: 'Make Up' },
{ value: 'Makerbot' },
{ value: 'Malay' },
{ value: 'Malayalam' },
{ value: 'Maltese' },
{ value: 'Management' },
{ value: 'Manufacturing' },
{ value: 'Manufacturing Design' },
{ value: 'Map Reduce' },
{ value: 'MariaDB' },
{ value: 'Market Research' },
{ value: 'Marketing' },
{ value: 'Marketplace Service' },
{ value: 'Materials Engineering' },
{ value: 'Mathematics' },
{ value: 'Matlab and Mathematica' },
{ value: 'Maya' },
{ value: 'Mechanical Engineering' },
{ value: 'Mechatronics' },
{ value: 'Medical' },
{ value: 'Medical Writing' },
{ value: 'Metatrader' },
{ value: 'MeteorJS' },
{ value: 'Metro' },
{ value: 'Microbiology' },
{ value: 'Microcontroller' },
{ value: 'Microsoft' },
{ value: 'Microsoft Access' },
{ value: 'Microsoft Exchange' },
{ value: 'Microsoft Expression' },
{ value: 'Microsoft Hololens' },
{ value: 'Microsoft Office' },
{ value: 'Microsoft Outlook' },
{ value: 'Microsoft SQL Server' },
{ value: 'Microsoft Visio' },
{ value: 'Microstation' },
{ value: 'Millwork' },
{ value: 'Mining Engineering' },
{ value: 'Minitlab' },
{ value: 'MLM' },
{ value: 'MMORPG' },
{ value: 'Mobile App Testing' },
{ value: 'Mobile Phone' },
{ value: 'MODx' },
{ value: 'MonetDB' },
{ value: 'Moodle' },
{ value: 'Mortgage Brokering' },
{ value: 'Motion Graphics' },
{ value: 'Moving' },
{ value: 'MQTT' },
{ value: 'Mural Painting' },
{ value: 'Music' },
{ value: 'MVC' },
{ value: 'MYOB' },
{ value: 'MySpace' },
{ value: 'MySQL' },
{ value: 'Nanotechnology' },
{ value: 'Natural Language' },
{ value: 'Network Administration' },
{ value: 'Newsletters' },
{ value: 'Nginx' },
{ value: 'Ning' },
{ value: 'Nintex Forms' },
{ value: 'Nintex Workflow' },
{ value: 'node.js' },
{ value: 'Nokia' },
{ value: 'Norwegian' },
{ value: 'NoSQL Couch / Mongo' },
{ value: 'Nutrition' },
{ value: 'OAuth' },
{ value: 'Objective C' },
{ value: 'OCR' },
{ value: 'Oculus Mobile SDK' },
{ value: 'Odoo' },
{ value: 'Online Writing' },
{ value: 'Open Cart' },
{ value: 'Open Journal Systems' },
{ value: 'OpenBravo' },
{ value: 'OpenCL' },
{ value: 'OpenGL' },
{ value: 'OpenSceneGraph' },
{ value: 'OpenSSL' },
{ value: 'OpenStack' },
{ value: 'OpenVMS' },
{ value: 'Oracle' },
{ value: 'Order Processing' },
{ value: 'Organizational Change Management' },
{ value: 'OSCommerce' },
{ value: 'Package Design' },
{ value: 'Packing / Shipping' },
{ value: 'Painting' },
{ value: 'Palm' },
{ value: 'Papiamento' },
{ value: 'Parallax Scrolling' },
{ value: 'Parallel Processing' },
{ value: 'Parallels Automation' },
{ value: 'Parallels Desktop' },
{ value: 'Patents' },
{ value: 'Pattern Making' },
{ value: 'Pattern Matching' },
{ value: 'Pavement' },
{ value: 'PayPal API' },
{ value: 'Payroll' },
{ value: 'Paytrace' },
{ value: 'PCB Layout' },
{ value: 'PDF' },
{ value: 'PEGA PRPC' },
{ value: 'PencilBlue CMS' },
{ value: 'Pentaho' },
{ value: 'PeopleSoft' },
{ value: 'Periscope' },
{ value: 'Perl' },
{ value: 'Personal Development' },
{ value: 'Pest Control' },
{ value: 'Pet Sitting' },
{ value: 'Petroleum Engineering' },
{ value: 'Phone Support' },
{ value: 'PhoneGap' },
{ value: 'Photo Editing' },
{ value: 'Photography' },
{ value: 'Photoshop' },
{ value: 'Photoshop Coding' },
{ value: 'Photoshop Design' },
{ value: 'PHP' },
{ value: 'Physics' },
{ value: 'PICK Multivalue DB' },
{ value: 'Pickup' },
{ value: 'Pinterest' },
{ value: 'Piping' },
{ value: 'PLC / SCADA' },
{ value: 'Plesk' },
{ value: 'Plugin' },
{ value: 'Plumbing' },
{ value: 'Poet' },
{ value: 'Poetry' },
{ value: 'Polish' },
{ value: 'Portuguese' },
]

const ProjectScope = () => {
 

  const description = 'This is a description.';
  const Navigate= useNavigate();
  const location  = useLocation();
  const receivedData  = location.state?.data;
  const [tags, setTags] = useState([]);
  const [teamSize, setTeamSize] = useState();
  const [Duration,setDuration]=useState();
  const [loading,setLoading]=useState(false);
  const [storedAccessToken, setStoredAccessToken] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [profileData,setProfileData]=useState(null);
  useEffect(()=>{
    const accessToken = localStorage.getItem("accessToken"); 
    const UserData = localStorage.getItem('UserData');
    if(UserData){
      setProfileData(JSON.parse(UserData));
    } 
    if (!accessToken){
      Navigate("/login");
    }
        },[])
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setStoredAccessToken(accessToken);

    }
  }, []);

  const SaveAndContinue = async ()=>{
    receivedData.Required_Skills=tags;
    receivedData.Team_Size=teamSize;
    receivedData.project_Duration=Duration;

    
    setLoading(true);

    try{
      const response = await fetch(`${API_URL}/api/v4/projects-posts`,{
        method: "POST", 
        headers : new Headers( {  
          'content-type' : 'application/json',
          'Authorization':`Bearer ${storedAccessToken}`,
          'accept': 'text/plain',

         } ),
        body: JSON.stringify({
          title : receivedData.project_title,
          summary: receivedData.project_Summary,
          scenario: receivedData.project_About,
          learningGoals: receivedData.skills_Learn,
          teamAndRoles: receivedData.team_Roles,
          expectedTeamSize: receivedData.Team_Size,
          expectedDuration: receivedData.project_Duration,
          requiredSkills:  receivedData.Required_Skills,
          categories: receivedData.project_Category,
        }),
      })
     
      const statusCode = response.status;
      if (statusCode===200){

        message.success('Post successfully');
          Navigate("/dashboard")
      // You can put any code here that you want to execute after the delay
        
        
      }
      else{
        setLoading(false);
        message.error('Failed to post project');
      }
    
      
      }catch (error) { 
        setLoading(false);
        message.error('Error posting project');
        
     console.log(error)

      }
    
    
  }
   
  

   const handleBackClick =()=>{
    Navigate("/project-details");
      }
  
      const handleSearch = (value) => {
        setInputValue(value);
      };
    
      const handleDeselect = (value) => {
        setTags((prev) => prev.filter((item) => item !== value));
      };

   const handleChange = (value) => {
    
       if (tags.length <= 8 &&  !tags.includes(value))  {
        setTags([...tags, value[0]]);
        // Clear input after adding tag
       }
    
    };
  

  const handleChangeDuration=(value)=>{
  
    setDuration(value)
  }

  const handleTagDelete = useCallback((tagToDelete) => {
    console.log(tagToDelete)

    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
    
  }, []);
  
    const handleClearTagsClick =()=>{
    setTags([]);//Clear the Tag
  
   }


  //the select time and the select duration
  const handleTeamSizechange = (value) => { //the select of team size onchange input value
    setTeamSize(value) 
   };

  const options2 = [ //the options of the duration 
    {
      label: '1 Week',
      value: '1 Week',
    },
    {
      label: '2-3 Weeks',
      value: '2-3 Weeks',
    },
    {
      label: '1 Month',
      value: '1 Month',
    },
    {
      label: '2-3 Month',
      value: '2-3 Month',
    },
    {
      label: '+3 Months',
      value: '+3 Months',
    },

  ];
  const labelRender = (props) => {
    const { label, value } = props;
    if (label) {
      return value;
    }
    return <span>Select a duration</span>;
  };
  if (!profileData){
    return(
    <Box sx={{ width: '100%' }}>
    <LinearProgress />
    </Box> 
     )
}
  return (
    <>
    {loading && ( 
  <Box sx={{ width: '100%' }}>
  <LinearProgress />
  </Box>  

)}
    <div className={style.hero}>
    <NavBar picture={profileData.profilePicture}/>
   <div className={style.ProjectDetails}>
       <section className={style.Steps}>
        <h1 className={style.titlePublish}>Publish A New Project</h1>
        <Steps
          direction="vertical"
          current={2}
          items={[
         {
          title: 'Overview',
          description,
        },
        {
         title: 'Project Details',
         description,
        },
        {
         title: 'Project Scope',
         description,
        },
        ]}
        />        
       </section>

       <section className={style.ProjectDetailsForm}>     
        <Breadcrumb
            items={[
          {
             title: <a href="/home">Home</a>,
          },
          {
             title: "New project",
          },
          {
             title: "Overview",
          },
     
         ]}
         />
         <p className={style.projectDetailsText}>Project Details</p>
         <div className={style.textFild}>
            <p className={style.questions}><span className={style.star}>* </span> Required Skills</p>
            <Select
           mode="multiple"
          style={{
            width: '100%',
          }}
          
          onSearch={handleSearch}
          onDeselect={handleDeselect}
          onChange={handleChange}
          value={[]}
          placeholder="Tags Mode"
  
          options={options}
          />
            <p className={style.passengerAlert}>8 skills maximum. Use letters and numbers only.</p>
          </div>
          <div className={style.textFild}>
            <p className={style.SkillsListText}>Skills list
              <Button type="link" 
                style={{
                  display:"flex",
                  alignItems:"center",
                  color:"#6738DD",
                  padding:"6.4px 15px",
                  fontSize:"0.875rem",
                }}
                onClick={handleClearTagsClick}
              >Clear all
              </Button> 
            </p>
            <div className={style.skillsTag}>
                {tags.map((tag) => (
                <Tag key={tag} 
                  closable 
                  onClose={(e) => {
                    e.preventDefault(); // Prevent the default close behavior
                    handleTagDelete(tag); // Pass the tag to the delete handler
                  }}
                  style={{
                    display: 'flex',
                    padding: '0.375rem 0.75rem',
                    alignItems: 'center',
                    gap: '0.1875rem',
                    borderRadius: '0.375rem',
                    border: '1px solid var(--Primary-5, #7C50E9)',
                    background: 'var(--Primary-1, #F8F5FF)',
                    width: 'fit-content'
                  }}>
                  {tag}
                </Tag> 
               ))}
              </div>

          </div>
          <div className={style.slectionField}>
               <div className={style.teamSizeSelection}>
               <p className={style.questions}><span className={style.star}>* </span> Team size</p>
                <InputNumber size="large" min={3} max={24} defaultValue={3} onChange={handleTeamSizechange} changeOnWheel />
                <p className={style.passengerAlert}>Minimum (3) and maximum (24)</p>
               </div>
               <div className={style.teamSizeSelection}>
               <p className={style.questions}><span className={style.star}>* </span> How long will this project take?</p>
               <Select
                  labelRender={labelRender}
                  size='large'
                  
                  defaultValue="1"
                  style={{
                  }}
                  options={options2}
                  onChange={handleChangeDuration}

                />
            
               </div>


          </div>
         <div className={style.buttonsSave}>
          <Button 
            type="link" 
            style={{
              display:"flex",
              alignItems:"center",
              color:"#6738DD",
              padding:"6.4px 15px",
              fontSize:"16px",
              }}
            onClick={handleBackClick}
          >Back
          </Button>
           <Button type="primary"
                  style={{
                    display:"flex",
                    alignItems:"center",
                    padding:"6.4px 15px",
                    fontSize:"16px",
                    background:"#6738DD",
                  }}
                  onClick={SaveAndContinue}
                >Save & Continue
             </Button>
          </div>
       </section>
   </div>
   </div>
   </>
  )
}
export default ProjectScope