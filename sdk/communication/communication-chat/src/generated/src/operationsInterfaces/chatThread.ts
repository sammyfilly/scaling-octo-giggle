/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ChatThreadListChatReadReceiptsOptionalParams,
  ChatThreadListChatReadReceiptsResponse,
  SendReadReceiptRequest,
  ChatThreadSendChatReadReceiptOptionalParams,
  SendChatMessageRequest,
  ChatThreadSendChatMessageOptionalParams,
  ChatThreadSendChatMessageResponse,
  ChatThreadListChatMessagesOptionalParams,
  ChatThreadListChatMessagesResponse,
  ChatThreadGetChatMessageOptionalParams,
  ChatThreadGetChatMessageResponse,
  UpdateChatMessageRequest,
  ChatThreadUpdateChatMessageOptionalParams,
  ChatThreadDeleteChatMessageOptionalParams,
  ChatThreadListChatParticipantsOptionalParams,
  ChatThreadListChatParticipantsResponse,
  CommunicationIdentifierModel,
  ChatThreadRemoveChatParticipantOptionalParams,
  AddChatParticipantsRequest,
  ChatThreadAddChatParticipantsOptionalParams,
  ChatThreadAddChatParticipantsResponse,
  UpdateChatThreadRequest,
  ChatThreadUpdateChatThreadPropertiesOptionalParams,
  ChatThreadGetChatThreadPropertiesOptionalParams,
  ChatThreadGetChatThreadPropertiesResponse,
  ChatThreadSendTypingNotificationOptionalParams,
  ChatThreadListChatReadReceiptsNextOptionalParams,
  ChatThreadListChatReadReceiptsNextResponse,
  ChatThreadListChatMessagesNextOptionalParams,
  ChatThreadListChatMessagesNextResponse,
  ChatThreadListChatParticipantsNextOptionalParams,
  ChatThreadListChatParticipantsNextResponse
} from "../models";

/** Interface representing a ChatThread. */
export interface ChatThread {
  /**
   * Gets chat message read receipts for a thread.
   * @param chatThreadId Thread id to get the chat message read receipts for.
   * @param options The options parameters.
   */
  listChatReadReceipts(
    chatThreadId: string,
    options?: ChatThreadListChatReadReceiptsOptionalParams
  ): Promise<ChatThreadListChatReadReceiptsResponse>;
  /**
   * Sends a read receipt event to a thread, on behalf of a user.
   * @param chatThreadId Thread id to send the read receipt event to.
   * @param sendReadReceiptRequest Read receipt details.
   * @param options The options parameters.
   */
  sendChatReadReceipt(
    chatThreadId: string,
    sendReadReceiptRequest: SendReadReceiptRequest,
    options?: ChatThreadSendChatReadReceiptOptionalParams
  ): Promise<void>;
  /**
   * Sends a message to a thread.
   * @param chatThreadId The thread id to send the message to.
   * @param sendChatMessageRequest Details of the message to send.
   * @param options The options parameters.
   */
  sendChatMessage(
    chatThreadId: string,
    sendChatMessageRequest: SendChatMessageRequest,
    options?: ChatThreadSendChatMessageOptionalParams
  ): Promise<ChatThreadSendChatMessageResponse>;
  /**
   * Gets a list of messages from a thread.
   * @param chatThreadId The thread id of the message.
   * @param options The options parameters.
   */
  listChatMessages(
    chatThreadId: string,
    options?: ChatThreadListChatMessagesOptionalParams
  ): Promise<ChatThreadListChatMessagesResponse>;
  /**
   * Gets a message by id.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param options The options parameters.
   */
  getChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    options?: ChatThreadGetChatMessageOptionalParams
  ): Promise<ChatThreadGetChatMessageResponse>;
  /**
   * Updates a message.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param updateChatMessageRequest Details of the request to update the message.
   * @param options The options parameters.
   */
  updateChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    updateChatMessageRequest: UpdateChatMessageRequest,
    options?: ChatThreadUpdateChatMessageOptionalParams
  ): Promise<void>;
  /**
   * Deletes a message.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param options The options parameters.
   */
  deleteChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    options?: ChatThreadDeleteChatMessageOptionalParams
  ): Promise<void>;
  /**
   * Gets the participants of a thread.
   * @param chatThreadId Thread id to get participants for.
   * @param options The options parameters.
   */
  listChatParticipants(
    chatThreadId: string,
    options?: ChatThreadListChatParticipantsOptionalParams
  ): Promise<ChatThreadListChatParticipantsResponse>;
  /**
   * Remove a participant from a thread.
   * @param chatThreadId Thread id to remove the participant from.
   * @param participantCommunicationIdentifier Id of the thread participant to remove from the thread.
   * @param options The options parameters.
   */
  removeChatParticipant(
    chatThreadId: string,
    participantCommunicationIdentifier: CommunicationIdentifierModel,
    options?: ChatThreadRemoveChatParticipantOptionalParams
  ): Promise<void>;
  /**
   * Adds thread participants to a thread. If participants already exist, no change occurs.
   * @param chatThreadId Id of the thread to add participants to.
   * @param addChatParticipantsRequest Thread participants to be added to the thread.
   * @param options The options parameters.
   */
  addChatParticipants(
    chatThreadId: string,
    addChatParticipantsRequest: AddChatParticipantsRequest,
    options?: ChatThreadAddChatParticipantsOptionalParams
  ): Promise<ChatThreadAddChatParticipantsResponse>;
  /**
   * Updates a thread's properties.
   * @param chatThreadId The id of the thread to update.
   * @param updateChatThreadRequest Request payload for updating a chat thread.
   * @param options The options parameters.
   */
  updateChatThreadProperties(
    chatThreadId: string,
    updateChatThreadRequest: UpdateChatThreadRequest,
    options?: ChatThreadUpdateChatThreadPropertiesOptionalParams
  ): Promise<void>;
  /**
   * Gets a chat thread's properties.
   * @param chatThreadId Id of the thread.
   * @param options The options parameters.
   */
  getChatThreadProperties(
    chatThreadId: string,
    options?: ChatThreadGetChatThreadPropertiesOptionalParams
  ): Promise<ChatThreadGetChatThreadPropertiesResponse>;
  /**
   * Posts a typing event to a thread, on behalf of a user.
   * @param chatThreadId Id of the thread.
   * @param options The options parameters.
   */
  sendTypingNotification(
    chatThreadId: string,
    options?: ChatThreadSendTypingNotificationOptionalParams
  ): Promise<void>;
  /**
   * ListChatReadReceiptsNext
   * @param chatThreadId Thread id to get the chat message read receipts for.
   * @param nextLink The nextLink from the previous successful call to the ListChatReadReceipts method.
   * @param options The options parameters.
   */
  listChatReadReceiptsNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatReadReceiptsNextOptionalParams
  ): Promise<ChatThreadListChatReadReceiptsNextResponse>;
  /**
   * ListChatMessagesNext
   * @param chatThreadId The thread id of the message.
   * @param nextLink The nextLink from the previous successful call to the ListChatMessages method.
   * @param options The options parameters.
   */
  listChatMessagesNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatMessagesNextOptionalParams
  ): Promise<ChatThreadListChatMessagesNextResponse>;
  /**
   * ListChatParticipantsNext
   * @param chatThreadId Thread id to get participants for.
   * @param nextLink The nextLink from the previous successful call to the ListChatParticipants method.
   * @param options The options parameters.
   */
  listChatParticipantsNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatParticipantsNextOptionalParams
  ): Promise<ChatThreadListChatParticipantsNextResponse>;
}
