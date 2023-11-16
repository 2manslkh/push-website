"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[48539],{5847:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var i=t(85893),o=t(11151),s=t(23734);const a={id:"docs-notifications-develop-integrating-notifications",title:"Integrating Notifications",hide_title:!0,slug:"./integrating-notifications",displayed_sidebar:"pushNotificationSidebar",sidebar_position:17,image:"/assets/docs/previews/docs_notifications_develop--integrating_notifications.png"},r="Integrating notifications overview",l={id:"notifications/build/docs-notifications-develop-integrating-notifications",title:"Integrating Notifications",description:"This section explores how to integrate notifications on your dApp, mobile app, crypto wallet or on any other frontend.",source:"@site/docs/notifications/01-build/17-Develop-Integrating-Notification.mdx",sourceDirName:"notifications/01-build",slug:"/notifications/build/integrating-notifications",permalink:"/docs/notifications/build/integrating-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/01-build/17-Develop-Integrating-Notification.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{id:"docs-notifications-develop-integrating-notifications",title:"Integrating Notifications",hide_title:!0,slug:"./integrating-notifications",displayed_sidebar:"pushNotificationSidebar",sidebar_position:17,image:"/assets/docs/previews/docs_notifications_develop--integrating_notifications.png"},sidebar:"pushNotificationSidebar",previous:{title:"Testing Notifications",permalink:"/docs/notifications/build/testing-notifications"},next:{title:"Playground",permalink:"/docs/notifications/playground"}},c={},d=[{value:"Integration process",id:"integration-process",level:2},{value:"Receiving notifications",id:"receiving-notifications",level:2},{value:"Pull based method",id:"pull-based-method",level:3},{value:"Push based method",id:"push-based-method",level:3},{value:"Bridge based method",id:"bridge-based-method",level:3},{value:"Pull method live implementation",id:"pull-method-live-implementation",level:2},{value:"Push method live implementation",id:"push-method-live-implementation",level:2},{value:"Bridge method implementation",id:"bridge-method-implementation",level:2},{value:"via Push delivery node",id:"via-push-delivery-node",level:3},{value:"via AWS SNS",id:"via-aws-sns",level:3}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components},{Head:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"integrating-notifications-overview",children:"Integrating notifications overview"}),"\n",(0,i.jsx)(e.p,{children:"This section explores how to integrate notifications on your dApp, mobile app, crypto wallet or on any other frontend."}),"\n",(0,i.jsxs)(e.p,{children:["Push is an interoperable network which already have live integrations from ",(0,i.jsx)(e.a,{href:"https://snaps.metamask.io/snap/npm/pushprotocol/snap/",title:"Push Metamask snap",children:"Push Metamask snap"}),", ",(0,i.jsx)(e.a,{href:"https://unstoppabledomains.com/",title:"Unstoppable integration with Push",children:"Unstoppable web / mobile app"}),", ",(0,i.jsx)(e.a,{href:"https://app.push.org/channels#receive-notifications",title:"Push dApp",children:"Push dapp / mobile app / extension"})," among other dapps, extensions and mobile apps. This means notifs are already received by wallets that are on those platforms as they have integrated Push protocol."]}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"Integrating Notifications | Push Notifications | Push Documentation"})}),"\n","\n","\n",(0,i.jsx)(e.h2,{id:"integration-process",children:"Integration process"}),"\n",(0,i.jsx)(e.p,{children:"Integrating notifications directly on your frontend is a critical component as it enables your users to have the best experience and massively improves re-engagement and Web3 UX for your protocol."}),"\n",(0,i.jsx)(e.p,{children:"To get started, you will need to \u2014"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Ensure your frontend has a way for your users ",(0,i.jsx)(e.a,{href:"/docs/notifications/build/manage-subscriptions/#subscribe-channel-api",title:"Subscribe (opt-in) API for Push protocol notifications",children:"to opt in to your channel"})," on your frontend."]}),"\n",(0,i.jsxs)(e.li,{children:["Choose what notification fetching mechanism you want to integrate for notifications to your users (",(0,i.jsx)(e.strong,{children:"Pull based"}),", ",(0,i.jsx)(e.strong,{children:"Push based"})," or ",(0,i.jsx)(e.strong,{children:"bridge based"}),") on your frontend."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"receiving-notifications",children:"Receiving notifications"}),"\n",(0,i.jsxs)(e.p,{children:["Notifications can be received on your frontend using either active user interaction, also known as ",(0,i.jsx)(e.strong,{children:"pull based method"})," or showing notifications as soon as it's triggered requiring no user interaction, which is known as ",(0,i.jsx)(e.strong,{children:"push based method"})," or triggering additional logic when notification is sent to a user using ",(0,i.jsx)(e.strong,{children:"bridge based method"}),"."]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["You will need to pick the best method according to your needs. Most of the time, it will be a combination of ",(0,i.jsx)(e.strong,{children:"Pull"})," and ",(0,i.jsx)(e.strong,{children:"Push"})," or all three for a more polished and re-engaging experience for your user."]})}),"\n",(0,i.jsx)(e.h3,{id:"pull-based-method",children:"Pull based method"}),"\n",(0,i.jsxs)(e.p,{children:["This method enables users to see notifications when they actively interact with an object on your frontend and relies on fetching notifications using restful APIs. For example: when you click ",(0,i.jsx)(e.strong,{children:"bell icon"})," on youtube and it fetches your notifications."]}),"\n",(0,i.jsx)(e.h3,{id:"push-based-method",children:"Push based method"}),"\n",(0,i.jsx)(e.p,{children:"This method doesn't rely on user interaction, instead it shows users notifications as soon as the frontend receives it. This is useful particularly when a user is on your frontend and you show them notifications as they are received."}),"\n",(0,i.jsx)(e.h3,{id:"bridge-based-method",children:"Bridge based method"}),"\n",(0,i.jsx)(e.p,{children:"This method is usually used when you want notifications to land on user's mobile home screen or through browser notification service."}),"\n",(0,i.jsxs)(e.p,{children:["Bridge based method allows triggering additional logic and are more of an extension to ",(0,i.jsx)(e.strong,{children:"push based method"})," as they enable routing to other Web2 notification services such as ",(0,i.jsx)(e.a,{href:"https://firebase.google.com/",title:"Link to google firebase",children:"Firebase"}),", ",(0,i.jsx)(e.a,{href:"https://developer.apple.com/documentation/usernotifications",title:"Link to APNS (Apple Push Notificaiton Service)",children:"Apple Push Notification Service"})," or to telegram / twitter / or other social bots."]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"Bridge based delivery is especially useful if you want to deliver notifications to your mobile app or extension while pull based and push based mechanism works best inside your dapp or mobile app."})}),"\n",(0,i.jsx)(e.h2,{id:"pull-method-live-implementation",children:"Pull method live implementation"}),"\n",(0,i.jsxs)(e.p,{children:["Implementing pull based mechanism requires inclusion of ",(0,i.jsx)(e.a,{href:"/docs/notifications/build/fetch-notifications/",title:"API for fetching notificatons from Push protocol",children:"fetch notifications API"})," and then using your custom frontend component or UIWeb component of Push to display them."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:'customPropMinimized="true"\n\n// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n\n// import { ethers } from ethers;\n// import { PushAPI, CONSTANTS } from @pushprotocol/restapi;\n// import { NotificationItem } from @pushprotocol/uiweb;\n\nfunction App(props) {\n  const [wallet, setWallet] = useState(\n    "0xD8634C39BBFd4033c0d3289C4515275102423681",\n  );\n  const [notifItems, setNotifItems] = useState([]);\n\n  const walletRef = useRef();\n\n  useEffect(() => {\n    if (walletRef.current) {\n      walletRef.current.value = wallet;\n    }\n  }, [wallet]);\n\n  const fetchNotification = async () => {\n    const walletText = walletRef.current.value;\n\n    // Demo only supports MetaMask (or other browser based wallets) and gets provider that injects as window.ethereum into each page\n    const provider = new ethers.providers.Web3Provider(window.ethereum);\n\n    // Get provider\n    await provider.send("eth_requestAccounts", []);\n\n    // Grabbing signer from provider\n    const signer = provider.getSigner();\n\n    // Initialize user for push\n    const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });\n\n    // retrieve notifications for users\n    const inboxNotifications = await userAlice.notification.list("INBOX", {\n      account: `eip155:11155111:${wallet}`,\n      limit: 5,\n    });\n\n    // set notifItems state so that react can render\n    setNotifItems(inboxNotifications);\n  };\n\n  function NotificationInterface() {\n    const inputStyle = {\n      padding: "10px",\n      margin: "10px 0",\n      width: "100%",\n      boxSizing: "border-box",\n    };\n\n    const textareaStyle = {\n      ...inputStyle,\n      height: "100px",\n      resize: "vertical",\n    };\n\n    const buttonStyle = {\n      padding: "10px 20px",\n      backgroundColor: "#dd44b9",\n      color: "#FFF",\n      border: "none",\n      borderRadius: "5px",\n      cursor: "pointer",\n      marginTop: "20px",\n    };\n\n    return (\n      <div style={{ width: "auto", margin: "20px auto" }}>\n        <div style={{ display: "flex", justifyContent: "space-between" }}>\n          <div style={{ flex: 1 }}>\n            <h2>\n              Pull based mechanism for displaying notifcations on frontend\n            </h2>\n            <p />\n            <label>\n              Put any wallet address and click on fetch notifications to see the\n              live results. Click to expand <b>Live Editor</b> tab to see the\n              code and play with it. For this demo, You will need Metamask (or\n              equivalent browser injected wallet), you will also need to sign a\n              transaction to see the notifications.\n            </label>\n            <p />\n            <label>Wallet address</label>\n            <input\n              type="text"\n              placeholder="Enter wallet address"\n              style={inputStyle}\n              ref={walletRef}\n              maxLength={80}\n            />\n          </div>\n        </div>\n        <button style={buttonStyle} onClick={fetchNotification}>\n          Fetch Notifications\n        </button>\n\n        <p />\n        <p />\n\n        {notifItems.length > 0 ? (\n          <h3>{`Notification Items for ${wallet}`}</h3>\n        ) : (\n          <></>\n        )}\n\n        {notifItems.map((notifItemSingular, idx) => {\n          const {\n            cta,\n            title,\n            message,\n            app,\n            icon,\n            image,\n            url,\n            blockchain,\n            notification,\n          } = notifItemSingular;\n\n          return (\n            <NotificationItem\n              key={idx} // any unique id\n              notificationTitle={title}\n              notificationBody={message}\n              cta={cta}\n              app={app}\n              icon={icon}\n              image={image}\n              url={url}\n              theme={"light"} // or can be dark\n              chainName={blockchain}\n              // chainName={blockchain as chainNameType} // if using Typescript\n            />\n          );\n        })}\n      </div>\n    );\n  }\n\n  return (\n    <>\n      <NotificationInterface />\n    </>\n  );\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"push-method-live-implementation",children:"Push method live implementation"}),"\n",(0,i.jsxs)(e.p,{children:["Implementing push based mechanism requires connecting to Push nodes via ",(0,i.jsx)(e.a,{href:"/docs/notifications/build/stream-notifications/",title:"API for streaming notificatons from Push protocol",children:"stream notifications API"})," which will trigger notifications as they come. You can then use your custom frontend component or UIWeb component of Push to display them."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:'customPropMinimized="true"\n\n// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n\n// import { ethers } from ethers;\n// import { PushAPI, CONSTANTS } from @pushprotocol/restapi;\n// import { NotificationItem } from @pushprotocol/uiweb;\n\nfunction App(props) {\n  const [wallet, setWallet] = useState(\n    "0xD8634C39BBFd4033c0d3289C4515275102423681",\n  );\n  const [progressTexts, setProgressTexts] = useState([]);\n  const [notifItems, setNotifItems] = useState([]);\n\n  const triggerNotification = async () => {\n    // Demo only supports MetaMask (or other browser based wallets) and gets provider that injects as window.ethereum into each page\n    const provider = new ethers.providers.Web3Provider(window.ethereum);\n\n    // Get provider\n    await provider.send("eth_requestAccounts", []);\n\n    // Grabbing signer from provider\n    const signer = provider.getSigner();\n\n    // Initialize user for push\n    const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });\n\n    // establish connection to stream\n    const stream = await userAlice.initStream([CONSTANTS.STREAM.CONNECT, CONSTANTS.STREAM.NOTIF])\n\n    // Listen for stream connection\n    stream.on(CONSTANTS.STREAM.CONNECT, async (data) => {\n      console.log("STREAM CONNECTED");\n      let text = [\'Stream Connected...\', \'Sending Simulated Notification...\', \'Wait for few moments for stream to capture notif and display...\', \'Waiting for you to sign notificaiton payload...\'];\n      setProgressTexts(text);\n      await userAlice.channel.send([userAlice.account], {\n        notification: { \n          title: \'GM Builders!\', \n          body: `_Simulated notification_ listened by stream and rendered with **@UIWeb/NotificationItem** with latest timestamp - ${new Date().valueOf()} [timestamp: ${new Date().valueOf()}]` \n        },\n        payload: {\n          title: \'GM Builders!\', \n          body: `_Simulated notification_ listened by stream and rendered with **@UIWeb/NotificationItem** with latest timestamp - ${new Date().valueOf()} [timestamp: ${new Date().valueOf()}]`,\n          cta: \'https://push.org\',\n          embed: \'https://push.org/assets/images/cover-image-8485332aa8d3f031e142a1180c71b341.webp\',\n        }\n      });\n      text.push(\'Message generated and sent. Waiting for stream to pick it up...\');\n      setProgressTexts(text);\n    });\n\n    // Listen for notifications\n    stream.on(CONSTANTS.STREAM.NOTIF, (item) => {\n      let text = progressTexts;\n      console.log(item);\n      text.push(\'Notification Received...\');\n      text.push(JSON.stringify(item));\n      setProgressTexts(text);\n      \n      // create notification item compatible with UIWeb/NotificationItem\n      const compatibleNotifItem = {\n        title: item.message.payload.title,\n        message: item.message.payload.body,\n        image: item.message.payload.embed,\n        cta: item.message.payload.cta,\n        icon: item.channel.icon,\n        app: item.channel.name,\n        url: item.channel.url,\n        blockchain: item.source,\n        notification: item.message.notification,\n      };\n      setNotifItems([compatibleNotifItem]);\n    });\n\n    // connect stream\n    stream.connect();\n  };\n\n  function NotificationInterface() {\n    const inputStyle = {\n      padding: "10px",\n      margin: "10px 0",\n      width: "100%",\n      boxSizing: "border-box",\n    };\n\n    const textareaStyle = {\n      ...inputStyle,\n      height: "100px",\n      resize: "vertical",\n    };\n\n    const buttonStyle = {\n      padding: "10px 20px",\n      backgroundColor: "#dd44b9",\n      color: "#FFF",\n      border: "none",\n      borderRadius: "5px",\n      cursor: "pointer",\n      marginTop: "20px",\n    };\n\n    return (\n      <div style={{ width: "auto", margin: "20px auto" }}>\n        <div style={{ display: "flex", justifyContent: "space-between" }}>\n          <div style={{ flex: 1 }}>\n            <h2>\n              Push based mechanism for displaying notifcations on frontend\n            </h2>\n            <p />\n            <label>\n              Put any wallet address and click on fetch notifications to see the\n              live results. Click to expand <b>Live Editor</b> tab to see the\n              code and play with it. For this demo, You will need Metamask (or\n              equivalent browser injected wallet), you will also need to sign a\n              transaction to see the notifications.\n            </label>\n            <p />\n          </div>\n        </div>\n        <div>\n          <hr />\n          <h3>Progress (will show progress information once Trigger Notification is clicked)</h3>\n          \n           {progressTexts.map((text, idx) => {\n            return (\n              <>\n                <span>{text}</span>\n                <br />\n              </>\n            );\n          })}\n        </div>\n        <hr />\n        <button style={buttonStyle} onClick={triggerNotification}>\n          Trigger Notification\n        </button>\n\n        <p />\n        <p />\n\n        {notifItems.length > 0 ? (\n          <h3>{`Notification Items for ${wallet}`}</h3>\n        ) : (\n          <></>\n        )}\n\n        {notifItems.map((notifItemSingular, idx) => {\n          const {\n            cta,\n            title,\n            message,\n            app,\n            icon,\n            image,\n            url,\n            blockchain,\n            notification,\n          } = notifItemSingular;\n\n          return (\n            <NotificationItem\n              key={idx} // any unique id\n              notificationTitle={title}\n              notificationBody={message}\n              cta={cta}\n              app={app}\n              icon={icon}\n              image={image}\n              url={url}\n              theme={"light"} // or can be dark\n              chainName={blockchain}\n              // chainName={blockchain as chainNameType} // if using Typescript\n            />\n          );\n        })}\n      </div>\n    );\n  }\n\n  return (\n    <>\n      <NotificationInterface />\n    </>\n  );\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"bridge-method-implementation",children:"Bridge method implementation"}),"\n",(0,i.jsx)(e.p,{children:"Bridge method is recommended when you want to do extra things when a notification is triggered to a wallet."}),"\n",(0,i.jsx)(e.p,{children:"For example, you might want to route them to telegram bot or use Web2 notification services of Apple or Google to display it on mobile home screen (completely different process than displaying notifications inside your app) which requires following their rules. There are couple of options to implement them \u2014"}),"\n",(0,i.jsx)(e.h3,{id:"via-push-delivery-node",children:"via Push delivery node"}),"\n",(0,i.jsx)(e.p,{children:"Delivery node is the recomended way to setup your mobile home screen push notifications or to connect to Push protocol notification network via your OS!!"}),"\n",(0,i.jsx)(s.S5,{href:"/docs/notifications/tutorials/integrate-notifications-via-delivery-node",title:"Tutorial on how to implement bridge notification delivery mechanism for Push protocol using Push delivery node",children:(0,i.jsx)(e.p,{children:"Setup and bridge notifications via Push Delivery Node"})}),"\n",(0,i.jsx)(e.h3,{id:"via-aws-sns",children:"via AWS SNS"}),"\n",(0,i.jsxs)(e.p,{children:["Delivery node is a decentralized solution while AWS SNS route is centralized. It is recommended to use delivery node but you can use AWS SNS incase you prefer Web2.5 approach \u2014 ",(0,i.jsx)(s.S5,{href:"/docs/notifications/tutorials/integrate-notifications-via-aws-sns",title:"Tutorial on how to implement bridge notification delivery mechanism for Push protocol using AWS SNS",children:"Setup and implement AWS SNS"})]})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},11151:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return a}});var i=t(67294);const o={},s=i.createContext(o);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);