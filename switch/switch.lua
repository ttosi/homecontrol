wifi.setmode(wifi.STATION)
wifi.sta.config("COLUMBIAVIEW", "j3nny$int3rnet")

tmr.alarm(0, 1000, 1, function()
    -- An IP has been successuly offered by the AP
    if wifi.sta.getip() ~= nil then
      tmr.stop(0);

      print("")
      print(wifi.sta.getip())

      LED_PIN = 4 -- gpio2

      gpio.mode(LED_PIN, gpio.OUTPUT)
      value = true

      tmr.alarm(0, 5000, 1, function ()
          gpio.write(LED_PIN, value and gpio.HIGH or gpio.LOW)
          value = not value
					print(value)
        end)

      sntp.sync("time.nist.gov",
        function(sec, usec, server)
          tm = rtctime.epoch2cal(rtctime.get())
          print(string.format("%04d/%02d/%02d %02d:%02d:%02d", tm["year"], tm["mon"], tm["day"], tm["hour"], tm["min"], tm["sec"]))
        end,
        function()
          print("failed!")
        end)
      -- dofile("client.lua")
    end
  end)
