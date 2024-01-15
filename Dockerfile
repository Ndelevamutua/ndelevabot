FROM quay.io/ndelevamutua/md:beta
RUN git clone https://github.com/ndelevamutua/whatsapp-bot-md.git /root/ndeleva/
WORKDIR /root/ndeleva/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]