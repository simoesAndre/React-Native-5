import PushNotification from "react-native-push-notification"

class NotificationManager {
  setNavegador (novoNavegador) {
    navegador = novoNavegador
  }
  
  createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: "CanalTeste", // (required)
        channelName: "Canal de Teste", // (required)
        channelDescription: "Canal de teste de notificações", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  // Configuração orientada pela documentação do React Native Push Notification
  // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log("[NotificationManager] onRegister token:", token)
      },
      onNotification: function (notification) {
        console.log("[NotificationManager] onNotification:", notification)
        navegador.navigate('Mock')
      },
    })
  }

  // É aqui que nossa notificação para o Android é construida
  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || "ic_launcher",
      smallIcon: options.smallIcon || "ic_launcher",
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || "high",
      importance: options.importance || "high",
      data: data            
    }
  }
 
  // Fução que exibe a notificação
  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      /* Propriedades do Android */
      ...this.buildAndroidNotification(id, title, message, data, options),

      /* Propriedades do Android e iOS */
      title: title || "",
      channelId: "CanalTeste",
      message: message || "",
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false
    })
  }

  //Notificação agendada
  scheduleNotifications = () => {
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      id: 2,
      title: 'Pede uma refeição',
      message: 'Cupom de R$ 15,00 disponível no seu app', // (required)
      date: new Date(Date.now() + 300 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false          
      channelId: "CanalTeste",
      repeatTime: 900 * 1000,
      repeatType: 'time'
    })
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      id: 3,
      title: 'Próxima refeição',
      message: 'A pergunta que não quer calar: o que vamos comer?', // (required)
      date: new Date(Date.now() + 600 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false          
      channelId: "CanalTeste",
      repeatTime: 900 * 1000,
      repeatType: 'time'
    })
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      id: 4,
      title: 'Oferta do dia',
      message: 'Somente hoje: xis salada por R$ 10,00', // (required)
      date: new Date(Date.now() + 900 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false          
      channelId: "CanalTeste",
      repeatTime: 900 * 1000,
      repeatType: 'time'
    })
  }
}

export const notificationManager = new NotificationManager()
